import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import gantel from "../assets/gan.jpg";
import skakalka from "../assets/ska.jpg";
import trenajer from "../assets/tre.jpg";
import inventar from "../assets/inventar.png";
import rukzak from "../assets/sum.jpg";
import Footer from "../components/Footer";

const Aksesuar = ({ goods, getGood, AddToCart, loading }) => {
  const navigate = useNavigate();

  const aksesuar = goods.filter((item) => {
    return (
      item.category === "Гантель" ||
      item.category === "Скакалка" ||
      item.category === "Тренажер" ||
      item.category === "Спортивный инвентарь" ||
      item.category === "Рюкзаки"
    );
  });
  console.log("SHOES", aksesuar);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="container">
      <div
        style={{ left: "10px", marginBottom: "20px", display: "flex" }}
        className="back"
      >
        <Link to="/">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </Link>
        <Link style={{ marginLeft: "0px" }} to="/">
          Назад
        </Link>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            fontSize: "31px",
            marginLeft: "69px",
          }}
        >
          Аксессуары
        </h1>
      </div>

      {/* SECTIONS  */}
      <div className="sections">
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/aksesuar/gantel">
          <div className="section">
            <h3>Гантель</h3>
            <img src={gantel} alt="" style={{ marginLeft: "152px" ,height:"120px"}} />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/aksesuar/skakalka">
          <div className="section">
            <h3>Скакалка</h3>
            <img
              style={{ marginLeft: "145px", width: "100px" }}
              src={skakalka}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/aksesuar/trenajer">
          <div className="section">
            <h3>Тренажер</h3>
            <img style={{ marginLeft: "125px" }} src={trenajer} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-60px" }} />
        <Link to="/aksesuar/inventar">
          <div className="section">
            <h3 style={{ lineHeight: "35px" }}>Спортивный инвентарь</h3>
            <img
              style={{ position: "relative", right: "10px" }}
              src={inventar}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/aksesuar/rukzak">
          <div className="section">
            <h3>Рюкзаки</h3>
            <img style={{ marginLeft: "145px" }} src={rukzak} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
      </div>
      {/* SECTIONS  */}

      <div className="cards">
        {loading ? (
          <div
            style={{
              diplay: "flex",
              marginLeft: "130px",
              marginTop: "20px",
              marginBottom: "400px",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </div>
        ) : aksesuar.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "80px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          aksesuar.map((good) => (
            <div key={good.id}>
              <div
                onClick={() => getGood(good.id)}
                key={good.id}
                className="card"
              >
                {/* NAVIGATION  */}
                <div
                  onClick={() => navigate(`/good/${good.id}`)}
                  className="img"
                >
                  <img src={good.image} alt="фото" />
                </div>
                <div className="info">
                  <span
                    className="title"
                    onClick={() => navigate(`/good/${good.id}`)}
                  >
                    {good.title}
                  </span>
                  <span
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="price"
                  >
                    {good.price} $
                  </span>
                  <div
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="color"
                  >
                    Цвет:{" "}
                    <div style={{ backgroundColor: `${good.color}` }}></div>
                  </div>

                  <div onClick={() => alert("Товар добавлен в корзину")}>
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        fontSize: "12px",
                        marginBottom: "15px",
                        marginTop: "10px",
                      }}
                      className="butto"
                      onClick={() => AddToCart(good)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </div>
  );
};

// ГАНТЕЛЬ
export const Gantel = ({ loading, goods, getGood, AddToCart }) => {
  const gantel = goods.filter((item) => {
    return item.category === "Гантель";
  });
  console.log("Гантель", gantel);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        onClick={() => navigate(-1)}
        style={{ left: "10px", marginBottom: "20px", display: "flex" }}
        className="back"
      >
        <span className="span">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </span>
        <span
          className="span"
          style={{ marginLeft: "0px", color: "blue", cursor: "pointer" }}
        >
          Назад
        </span>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            marginLeft: "134px",
            fontSize: "30px",
          }}
        >
          Гантель
        </h1>
      </div>

      <div className="cards">
        {loading ? (
          <div
            style={{
              diplay: "flex",
              marginLeft: "130px",
              marginTop: "20px",
              marginBottom: "400px",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </div>
        ) : gantel.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "500px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          gantel.map((good) => (
            <div key={good.id}>
              <div
                onClick={() => getGood(good.id)}
                key={good.id}
                className="card"
              >
                {/* NAVIGATION  */}
                <div
                  onClick={() => navigate(`/good/${good.id}`)}
                  className="img"
                >
                  <img src={good.image} alt="фото" />
                </div>
                <div className="info">
                  <span
                    className="title"
                    onClick={() => navigate(`/good/${good.id}`)}
                  >
                    {good.title}
                  </span>
                  <span
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="price"
                  >
                    {good.price} $
                  </span>
                  <div
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="color"
                  >
                    Цвет:{" "}
                    <div style={{ backgroundColor: `${good.color}` }}></div>
                  </div>

                  <div onClick={() => alert("Товар добавлен в корзину")}>
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        fontSize: "12px",
                        marginBottom: "15px",
                        marginTop: "10px",
                      }}
                      className="butto"
                      onClick={() => AddToCart(good)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// СКАКАЛКА
export const Skakalka = ({ loading, goods, getGood, AddToCart }) => {
  const skakalka = goods.filter((item) => {
    return item.category === "Скакалка";
  });
  console.log("Скакалка", skakalka);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        onClick={() => navigate(-1)}
        style={{ left: "10px", marginBottom: "20px", display: "flex" }}
        className="back"
      >
        <span className="span">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </span>
        <span
          className="span"
          style={{ marginLeft: "0px", color: "blue", cursor: "pointer" }}
        >
          Назад
        </span>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            marginLeft: "110px",
            fontSize: "30px",
          }}
        >
          Скакалка
        </h1>
      </div>

      <div className="cards">
        {loading ? (
          <div
            style={{
              diplay: "flex",
              marginLeft: "130px",
              marginTop: "20px",
              marginBottom: "400px",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </div>
        ) : skakalka.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "500px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          skakalka.map((good) => (
            <div key={good.id}>
              <div
                onClick={() => getGood(good.id)}
                key={good.id}
                className="card"
              >
                {/* NAVIGATION  */}
                <div
                  onClick={() => navigate(`/good/${good.id}`)}
                  className="img"
                >
                  <img src={good.image} alt="фото" />
                </div>
                <div className="info">
                  <span
                    className="title"
                    onClick={() => navigate(`/good/${good.id}`)}
                  >
                    {good.title}
                  </span>
                  <span
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="price"
                  >
                    {good.price} $
                  </span>
                  <div
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="color"
                  >
                    Цвет:{" "}
                    <div style={{ backgroundColor: `${good.color}` }}></div>
                  </div>

                  <div onClick={() => alert("Товар добавлен в корзину")}>
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        fontSize: "12px",
                        marginBottom: "15px",
                        marginTop: "10px",
                      }}
                      className="butto"
                      onClick={() => AddToCart(good)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// ТРЕНАЖЕР
export const Trenajer = ({ loading, goods, getGood, AddToCart }) => {
  const trenajer = goods.filter((item) => {
    return item.category === "Тренажер";
  });
  console.log("Тренажер", trenajer);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        onClick={() => navigate(-1)}
        style={{ left: "10px", marginBottom: "20px", display: "flex" }}
        className="back"
      >
        <span className="span">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </span>
        <span
          className="span"
          style={{ marginLeft: "0px", color: "blue", cursor: "pointer" }}
        >
          Назад
        </span>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            marginLeft: "99px",
            fontSize: "30px",
          }}
        >
          Тренажер
        </h1>
      </div>

      <div className="cards">
        {loading ? (
          <div
            style={{
              diplay: "flex",
              marginLeft: "130px",
              marginTop: "20px",
              marginBottom: "400px",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </div>
        ) : trenajer.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "500px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          trenajer.map((good) => (
            <div key={good.id}>
              <div
                onClick={() => getGood(good.id)}
                key={good.id}
                className="card"
              >
                {/* NAVIGATION  */}
                <div
                  onClick={() => navigate(`/good/${good.id}`)}
                  className="img"
                >
                  <img src={good.image} alt="фото" />
                </div>
                <div className="info">
                  <span
                    className="title"
                    onClick={() => navigate(`/good/${good.id}`)}
                  >
                    {good.title}
                  </span>
                  <span
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="price"
                  >
                    {good.price} $
                  </span>
                  <div
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="color"
                  >
                    Цвет:{" "}
                    <div style={{ backgroundColor: `${good.color}` }}></div>
                  </div>

                  <div onClick={() => alert("Товар добавлен в корзину")}>
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        fontSize: "12px",
                        marginBottom: "15px",
                        marginTop: "10px",
                      }}
                      className="butto"
                      onClick={() => AddToCart(good)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// СПОРТИВНЫЙ ИНВЕНТАРЬ
export const Inventar = ({ loading, goods, getGood, AddToCart }) => {
  const inventar = goods.filter((item) => {
    return item.category === "Спортивный инвентарь";
  });
  console.log("Спортивный инвентарь", inventar);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        onClick={() => navigate(-1)}
        style={{ left: "10px", marginBottom: "20px", display: "flex" }}
        className="back"
      >
        <span className="span">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </span>
        <span
          className="span"
          style={{ marginLeft: "0px", color: "blue", cursor: "pointer" }}
        >
          Назад
        </span>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            fontSize: "30px",
            textAlign: "right",
            position: "relative",
            right: "18px",
          }}
        >
          Спортивный инвентарь
        </h1>
      </div>

      <div className="cards">
        {loading ? (
          <div
            style={{
              diplay: "flex",
              marginLeft: "130px",
              marginTop: "20px",
              marginBottom: "400px",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </div>
        ) : inventar.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "500px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          inventar.map((good) => (
            <div key={good.id}>
              <div
                onClick={() => getGood(good.id)}
                key={good.id}
                className="card"
              >
                {/* NAVIGATION  */}
                <div
                  onClick={() => navigate(`/good/${good.id}`)}
                  className="img"
                >
                  <img src={good.image} alt="фото" />
                </div>
                <div className="info">
                  <span
                    className="title"
                    onClick={() => navigate(`/good/${good.id}`)}
                  >
                    {good.title}
                  </span>
                  <span
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="price"
                  >
                    {good.price} $
                  </span>
                  <div
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="color"
                  >
                    Цвет:{" "}
                    <div style={{ backgroundColor: `${good.color}` }}></div>
                  </div>

                  <div onClick={() => alert("Товар добавлен в корзину")}>
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        fontSize: "12px",
                        marginBottom: "15px",
                        marginTop: "10px",
                      }}
                      className="butto"
                      onClick={() => AddToCart(good)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// РЮКЗАКИ
export const Rukzak = ({ loading, goods, getGood, AddToCart }) => {
  const rukzak = goods.filter((item) => {
    return item.category === "Рюкзаки";
  });
  console.log("Рюкзаки", rukzak);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const navigate = useNavigate();
  return (
    <div className="container">
      <div
        onClick={() => navigate(-1)}
        style={{ left: "10px", marginBottom: "20px", display: "flex" }}
        className="back"
      >
        <span className="span">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </span>
        <span
          className="span"
          style={{ marginLeft: "0px", color: "blue", cursor: "pointer" }}
        >
          Назад
        </span>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            marginLeft: "123px",
            fontSize: "30px",
          }}
        >
          Рюкзаки
        </h1>
      </div>

      <div className="cards">
        {loading ? (
          <div
            style={{
              diplay: "flex",
              marginLeft: "130px",
              marginTop: "20px",
              marginBottom: "400px",
            }}
          >
            <CircularProgress size={100} color="inherit" />
          </div>
        ) : rukzak.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "500px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          rukzak.map((good) => (
            <div key={good.id}>
              <div
                onClick={() => getGood(good.id)}
                key={good.id}
                className="card"
              >
                {/* NAVIGATION  */}
                <div
                  onClick={() => navigate(`/good/${good.id}`)}
                  className="img"
                >
                  <img src={good.image} alt="фото" />
                </div>
                <div className="info">
                  <span
                    className="title"
                    onClick={() => navigate(`/good/${good.id}`)}
                  >
                    {good.title}
                  </span>
                  <span
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="price"
                  >
                    {good.price} $
                  </span>
                  <div
                    onClick={() => navigate(`/good/${good.id}`)}
                    className="color"
                  >
                    Цвет:{" "}
                    <div style={{ backgroundColor: `${good.color}` }}></div>
                  </div>

                  <div onClick={() => alert("Товар добавлен в корзину")}>
                    <button
                      style={{
                        width: "100px",
                        height: "40px",
                        fontSize: "12px",
                        marginBottom: "15px",
                        marginTop: "10px",
                      }}
                      className="butto"
                      onClick={() => AddToCart(good)}
                    >
                      Добавить в корзину
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Aksesuar;
