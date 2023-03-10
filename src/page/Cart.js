import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import SelectSizeCart from "../components/dropdowns/SelectSizeCart";
import UserInfo from "../components/UserInfo";
import { useUserAuth } from "../context/UserAuthContext";
import { db } from "../firebase";
import "../styles/Cart.scss";
import Footer from "../components/Footer";
import mb from "../assets/mbank.webp";
import visa from "../assets/visa.png";
import mir from "../assets/mir.png";
import o from "../assets/o.webp";

const ordersFromLocalStorage = JSON.parse(
  localStorage.getItem("orders") || "[]"
);

const Cart = ({
  cartItems,
  AddToCart,
  RemoveFromCart,
  handleRemove,
  setCartItems,
}) => {
  console.log("CART", cartItems);
  const { user } = useUserAuth();
  console.log("USER", user?.uid);

  // TOTAL PRICE
  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price,
    0
  );

  // SESSION STORAGE
  const names = JSON.parse(sessionStorage.getItem("name"));
  const numbers = JSON.parse(sessionStorage.getItem("number"));
  const districts = JSON.parse(sessionStorage.getItem("district"));
  const towns = JSON.parse(sessionStorage.getItem("town"));
  const countries = JSON.parse(sessionStorage.getItem("country"));
  const streets = JSON.parse(sessionStorage.getItem("street"));
  const pocht = JSON.parse(sessionStorage.getItem("pochta"));

  // MAKING AN ORDER
  const [name, setName] = useState(names);
  const [number, setNumber] = useState(numbers);
  const [district, setDistrict] = useState(districts);
  const [town, setTown] = useState(towns);
  const [country, setcountry] = useState(countries);
  const [street, setStreet] = useState(streets);
  const [pochta, setPochta] = useState(pocht);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("name", JSON.stringify(name));
    sessionStorage.setItem("number", JSON.stringify(number));
    sessionStorage.setItem("district", JSON.stringify(district));
    sessionStorage.setItem("town", JSON.stringify(town));
    sessionStorage.setItem("country", JSON.stringify(country));
    sessionStorage.setItem("street", JSON.stringify(street));
    sessionStorage.setItem("pochta", JSON.stringify(pochta));
  }, [name, number, district, town, street, pochta, country]);

  // DATE
  let ts = new Date();
  let published = ts.toLocaleString();

  // REF
  const ordersCollectionRef = collection(db, "orders");

  // SUBMIT
  const makeAnOrder = async (e) => {
    e.preventDefault();

    if (cartItems.length === 0) {
      setUploading(false);
    } else {
      setUploading(true);
    }

    try {
      if (!user) {
        alert("?????????????? ?? ??????????????, ?????????? ?????????????? ??????????");
      } else {
        if (cartItems.length === 0) {
          alert("?? ?????? ?????? ?????????????? ?? ????????????????");
        } else {
          await addDoc(ordersCollectionRef, {
            paid: false,
            name: name,
            number: number,
            district: district,
            town: town,
            country: country,
            street: street,
            pochta: pochta,
            date: published,
            email: user.email,
            id: Date.now(),
            money: totalPrice,
            orderedGoods: cartItems,
            userId: user ? user?.uid : null,
          });
          if (user) {
            setUploading(false);
            alert("?????????????? ????????????????");
            sessionStorage.clear();
            setCartItems([]);
            setName("");
            setNumber("");
            setDistrict("");
            setTown("");
            setStreet("");
            setPochta("");
            setcountry("");
          }
        }
      }
    } catch (err) {
      alert("???????????????? ???????????? ?????? ????????????", err);
    }
  };

  // ORDER HISTORY
  const [ordersHistory, setOrdersHistory] = useState([ordersFromLocalStorage]);

  console.log("order history", ordersHistory);

  useEffect(() => {
    const getData = async () => {
      const colRef = collection(db, "orders");

      const q = await query(colRef, where("userId", "==", user?.uid || ""));

      await onSnapshot(q, (snapshot) => {
        let orders = [];
        snapshot.docs.map((doc) => {
          orders.push({ ...doc.data(), id: doc.id });
        });

        setOrdersHistory(orders);
      });
    };
    getData();
  }, []);

  // ORDER HISTORY LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(ordersHistory));
  }, [ordersHistory]);

  // DELETE ORDERED GOOD
  const deleteAnOrder = async (id) => {
    try {
      const goodDoc = doc(db, "orders", id);
      await deleteDoc(goodDoc);
    } catch (err) {
      alert("?????????? ????????????");
    } finally {
      alert("?????????? ?????????????? ????????????");
    }
  };

  return (
    <div className="container">
      <UserInfo />
      {cartItems.length === 0 ? (
        <div
          style={{
            textAlign: "center",
            marginTop: "50px",
          }}
        >
          <h1 style={{ color: "red" }}>?????? ?????????????????????? ??????????????...</h1>
          <hr style={{ marginTop: "50px" }} />
        </div>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={item.id}>
              <div className="cart-item">
                <div className="cart-image">
                  <img src={item.image} alt="" />
                  <div className="increment">
                    <button
                      style={{ width: "30px", height: "30px" }}
                      className="butto"
                      onClick={() => RemoveFromCart(item)}
                    >
                      -
                    </button>
                    <h4>{item.quantity}</h4>
                    <button
                      style={{ width: "30px", height: "30px" }}
                      className="butto"
                      onClick={() => AddToCart(item)}
                    >
                      +
                    </button>
                  </div>
                  <h5>{Number(item.quantity * item.price)} $</h5>
                </div>
                <div className="cart-info">
                  <h5>??????????: {item.title}</h5>
                  <h5>????????: {item.price} $</h5>
                  <h5 style={{ display: "flex", gap: "10px" }}>
                    ????????:{" "}
                    <div
                      style={{
                        backgroundColor: `${item.color}`,
                        width: "30px",
                        height: "30px",
                        borderRadius: "50px",
                      }}
                    ></div>
                  </h5>
                  {/* SELECT SIZE  */}
                  <SelectSizeCart
                    sizes={item.sizes}
                    item={item}
                    cartItems={cartItems}
                    setCartItems={setCartItems}
                  />
                  <button
                    style={{ width: "150px", height: "40px", fontSize: "15px" }}
                    className="butto"
                    onClick={() => handleRemove(item.id)}
                  >
                    ?????????????? ???? ??????????????
                  </button>
                </div>
              </div>
              <hr />
            </div>
          ))}
          <h5>
            <span style={{ fontWeight: "900" }}>??????????:</span> {totalPrice} $
          </h5>
        </div>
      )}
      <form className="formOrder" onSubmit={makeAnOrder}>
        <h1>???????????????????? ????????????</h1>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          type="text"
          placeholder="??????"
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
          type="number"
          placeholder="?????????? ????????????????"
        />
        <input
          value={country}
          onChange={(e) => setcountry(e.target.value)}
          required
          type="text"
          placeholder="????????????..."
        />
        <input
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
          required
          type="text"
          placeholder="??????????????..."
        />

        <input
          value={town}
          onChange={(e) => setTown(e.target.value)}
          required
          type="text"
          placeholder="??????????, ??????????..."
        />
        <input
          value={street}
          onChange={(e) => setStreet(e.target.value)}
          required
          type="text"
          placeholder="??????????"
        />
        <input
          value={pochta}
          onChange={(e) => setPochta(e.target.value)}
          type="text"
          placeholder="?????????????????? ??????????"
        />
        <button type="submit">
          {uploading ? "???????? ????????????????..." : "???????????????? ??????????"}
        </button>
      </form>

      {/* ORDER HISTORY  */}
      {user ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <h1 style={{ fontSize: "44px", marginBottom: "40px" }}>
            ?????????????? ??????????????
          </h1>
          {ordersHistory.length === 0 ? (
            <h5 style={{ color: "red", marginBottom: "300px" }}>
              ???? ???????????? ???? ????????????????...
            </h5>
          ) : (
            ordersHistory.map((i, index) => (
              <div
                className="ordersHistory"
                style={{ marginBottom: "100px" }}
                key={i.id}
              >
                <h1 style={{ fontSize: "45px" }}>{index + 1}-??????????)</h1>
                <h5>
                  <span>??????:</span> {i.name}
                </h5>
                <h5>
                  <span>???????? ????????????:</span> {i.date}
                </h5>
                <h5>
                  <span>????????????:</span> {i?.country}
                </h5>
                <h5>
                  <span>??????????????:</span> {i.district}
                </h5>
                <h5>
                  <span>??????????:</span> {i.town}
                </h5>
                <h5>
                  <span>??????????:</span> {i.street}
                </h5>
                <h5>
                  <span>??????????:</span> {i.number}
                </h5>
                <h5>
                  <span>??????????:</span> {i.money} $
                </h5>
                <h1 style={{ fontSize: "38px" }}>???????????????????? ????????????</h1>
                <div className="ordered-goods">
                  {i.orderedGoods?.map((i, index) => (
                    <>
                      <h2>{index + 1}-??????????</h2>
                      <div>
                        <h5>
                          <span>????????????????????:</span> {i.quantity}
                        </h5>
                        <h5 style={{ display: "flex", gap: "10px" }}>
                          <span>????????:</span>{" "}
                          <div
                            style={{
                              backgroundColor: `${i.color}`,
                              width: "30px",
                              height: "30px",
                              borderRadius: "50px",
                            }}
                          ></div>
                        </h5>
                        <h5>
                          <span>????????????:</span> {i.selectedSize}
                        </h5>
                        <h5>
                          <span>??????????:</span> {i.title}
                        </h5>
                        <h5>
                          <span>?????? ????????:</span> {i.type}
                        </h5>
                        <h5>
                          <span>??????????????????:</span> {i.category}
                        </h5>
                        <img style={{ width: "100px" }} src={i.image} alt="" />
                      </div>
                      <strong
                        style={{
                          fontSize: "18px",
                          color: "black",
                        }}
                      >
                        ?????????? ???????????? ?????????????????? ?????? ??????????
                        <a href="https://wa.me/79854677136" target={"_blank"}>
                          <br />
                          ?????????????? ??????????...
                        </a>
                      </strong>
                      <hr />
                    </>
                  ))}
                  <button
                    onClick={() => deleteAnOrder(i.id)}
                    className="deleteAnOrder"
                  >
                    ?????????????? ??????????
                  </button>
                </div>
                {i.paid === false ? (
                  <h5 style={{ color: "red" }}>
                    <span style={{ fontSize: "25px" }}>???? ????????????????:</span>{" "}
                    <br /> ???????????????? {i.money} $, ?????????? ?????????? ?????? ????????????
                    <br />
                    <h5
                      style={{
                        color: "blue",
                        fontWeight: 800,
                        marginTop: "10px",
                        fontSize: "25px",
                      }}
                    >
                      ??????????????????:{" "}
                    </h5>{" "}
                    <h5>
                      <img
                        src={visa}
                        alt="visa"
                        style={{
                          width: "40px",
                        }}
                      />
                      <span style={{ fontWeight: 600, color: "blue" }}>
                        : 4177490146558533
                      </span>{" "}
                    </h5>
                    <h5>
                      <img
                        src={mb}
                        alt="number"
                        style={{ width: "30px", height: "30px" }}
                      />
                      <span style={{ fontWeight: 600, color: "blue" }}>
                        : 996703302735
                      </span>{" "}
                    </h5>
                    <h5>
                      <img src={mir} alt="mir" style={{ width: "40px" }} />
                      <span style={{ fontWeight: 600, color: "blue" }}>
                        :2202202343913350
                      </span>{" "}
                    </h5>
                    <h5>
                      <img
                        alt="????????"
                        src={o}
                        style={{
                          width: "40px",
                        }}
                      />
                      <span style={{ fontWeight: 600, color: "blue" }}>
                        :996703302735
                      </span>{" "}
                    </h5>
                  </h5>
                ) : (
                  <h5 style={{ color: "blue" }}>
                    <span style={{ fontSize: "22px" }}>???? ????????????????: </span>{" "}
                    ???????????????? ??????????, ?????????????? ?????????? ?????????????????? ?? ?????????????? 2-????????????{" "}
                  </h5>
                )}
                <hr />
              </div>
            ))
          )}
        </div>
      ) : null}
      <Footer />
    </div>
  );
};

export default Cart;
