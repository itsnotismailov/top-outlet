import { Link } from "react-router-dom";
import "../styles/Admin.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import { CircularProgress } from "@mui/material";
import Footer from "../components/Footer";

const Admin = () => {
  // GETTING ORDER DATA
  const ordersCollectionRef = collection(db, "orders");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  console.log("ORDERS", orders);

  useEffect(() => {
    const getGoods = async () => {
      const data = await getDocs(ordersCollectionRef);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getGoods();
  }, []);

  // CHECKBOX
  const updatePaid = async (id, paid) => {
    const orderDoc = doc(db, "orders", id);
    const newFields = { paid: !paid };
    try {
      await updateDoc(orderDoc, newFields);
    } catch (err) {
      alert("Вышла ошибка");
    } finally {
      paid === false ? alert("Оплата потверждена") : alert("Оплата отменена");
    }
  };

  // DELETE ORDER
  const deleteOrder = async (id) => {
    try {
      const goodDoc = doc(db, "orders", id);
      await deleteDoc(goodDoc);
    } catch (err) {
      console.log(err);
    } finally {
      alert("Заказ успешно удален");
    }
  };

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <div className="back">
        <Link to="/">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </Link>
        <Link to="/">Назад</Link>
      </div>
      <h1 style={{ marginTop: "18px", fontSize: "45px" }}>
        Админская страница
      </h1>
      <div className="added-goods">
        <Link
          style={{ fontSize: "35px", position: "relative", top: "16px" }}
          to="/admin/goods"
        >
          Добавить товар
        </Link>
      </div>

      {loading ? (
        <div>
          <CircularProgress
            size={100}
            color="inherit"
            sx={{ marginTop: "50px", marginBottom: "500px" }}
          />
        </div>
      ) : (
        <>
          <hr style={{ marginTop: "55px" }} />
          <div className="orders">
            <h1 style={{ fontSize: "48px" }}>Заказы</h1>
            <h3>Количество заказов: {orders.length}</h3>
            <hr style={{ marginTop: "40px" }} />
            {orders.map((order, index) => (
              <div className="order-container" key={order.id}>
                <h1 style={{ marginRight: "190px", fontSize: "45px" }}>
                  {index + 1}-заказ)
                </h1>
                <div className="orders-info">
                  <h5>
                    <span>Имя:</span> {order.name}
                  </h5>
                  <h5>
                    <span>Страна:</span> {order.country}
                  </h5>
                  <h5>
                    <span>Область:</span> {order.district}
                  </h5>
                  <h5>
                    <span>Город:</span> {order.town}
                  </h5>
                  <h5>
                    <span>Улица:</span> {order.street}
                  </h5>
                  <h5>
                    <span>Почта:</span> {order.pochta}
                  </h5>
                  <h5>
                    <span>Дата заказа:</span> {order.date}
                  </h5>
                  <h5>
                    <span>Номер:</span> {order.number}
                  </h5>
                  <h5>
                    <span>Сумма:</span> {order.money} $
                  </h5>
                </div>
                <div className="ordered-good">
                  {order.orderedGoods.map((item, index) => (
                    <>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                        }}
                      >
                        <h2 style={{ marginRight: "240px", fontSize: "30px" }}>
                          {index + 1}-товар)
                        </h2>
                        <h5 style={{ display: "flex", gap: "5px" }}>
                          <span style={{ fontWeight: "800" }}>Цвет: </span>
                          <div
                            style={{
                              backgroundColor: `${item.color}`,
                              width: "30px",
                              height: "30px",
                              borderRadius: "50px",
                            }}
                          ></div>
                        </h5>
                        <h5>
                          <span style={{ fontWeight: "800" }}>Категория:</span>{" "}
                          {item.category}
                        </h5>
                        <h5>
                          <span style={{ fontWeight: "800" }}>Бренд:</span>{" "}
                          {item.title}
                        </h5>
                        <h5>
                          <span style={{ fontWeight: "800" }}>Количество:</span>{" "}
                          {item.quantity}
                        </h5>
                        <h5>
                          <span style={{ fontWeight: "800" }}>Размер:</span>{" "}
                          {item.selectedSize}
                        </h5>
                        <h5>
                          <span style={{ fontWeight: "800" }}>Для кого:</span>{" "}
                          {item.type}
                        </h5>
                        <img
                          style={{ width: "100px" }}
                          src={item.image}
                          alt=""
                        />
                      </div>
                      <hr />
                    </>
                  ))}
                </div>
                <div className="buttons">
                  <button onClick={() => deleteOrder(order.id)}>Удалить</button>
                  <input
                    type="checkbox"
                    id="order"
                    checked={order.paid}
                    style={{
                      width: "100px",
                      borderRadius: "50px",
                      position: "relative",
                      right: "15px",
                      cursor: "pointer",
                    }}
                    onChange={() => {
                      updatePaid(order.id, order.paid);
                    }}
                  />
                  <h6>Потвердить Оплату</h6>
                </div>
                <hr />
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Admin;
