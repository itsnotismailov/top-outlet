import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import "../styles/Shoes.scss";
import krosovki from "../assets/cross2.jpg";
import slans from "../assets/slans.jpg";
import botinka from "../assets/bot.jpg";
import kedy from "../assets/ked.jpg";
import Footer from "../components/Footer";

const Shoes = ({ goods, getGood, AddToCart, loading }) => {
  const navigate = useNavigate();

  const shoes = goods.filter((item) => {
    return (
      item.category === "Кроссовки" ||
      item.category === "Сланцы" ||
      item.category === "Ботинки" ||
      item.category === "Кеды"
    );
  });
  console.log("SHOES", shoes);

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
            marginLeft: "145px",
            fontSize: "31px",
          }}
        >
          Обувь
        </h1>
      </div>

      {/* SECTIONS  */}
      <div className="sections">
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/shoes/krosovki">
          <div className="section">
            <h3>Кроссовки</h3>
            <img src={krosovki} alt="" style={{position: "relative",left: "10px"}} />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/shoes/slans">
          <div className="section">
            <h3>Сланцы</h3>
            <img
              style={{ marginLeft: "155px", width: "100px" }}
              src={slans}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/shoes/botinki">
          <div className="section">
            <h3>Ботинки</h3>
            <img style={{ marginLeft: "150px" }} src={botinka} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/shoes/kedy">
          <div className="section">
            <h3>Кеды</h3>
            <img style={{ marginLeft: "190px" ,height:"120px"}} src={kedy} alt="" />
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
        ) : shoes.length === 0 ? (
          <h1
            style={{
              marginRight: "-178px",
              marginTop: "50px",
              marginBottom: "100px",
              fontSize: "40px",
            }}
          >
            НET ТОВАРОВ ☹
          </h1>
        ) : (
          shoes.map((good) => (
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

// КРОССОВКИ
export const Krosovki = ({ loading, goods, getGood, AddToCart }) => {
  const krosovki = goods.filter((item) => {
    return item.category === "Кроссовки";
  });
  console.log("Krosovki", krosovki);

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
            marginLeft: "83px",
            fontSize: "30px",
          }}
        >
          Кроссовки
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
        ) : krosovki.length === 0 ? (
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
          krosovki.map((good) => (
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

// СЛАНЦЫ
export const Slans = ({ loading, goods, getGood, AddToCart }) => {
  const slans = goods.filter((item) => {
    return item.category === "Сланцы";
  });
  console.log("Сланцы", slans);

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
            marginLeft: "135px",
            fontSize: "30px",
          }}
        >
          Сланцы
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
        ) : slans.length === 0 ? (
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
          slans.map((good) => (
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

// БОТИНКИ
export const Botinki = ({ loading, goods, getGood, AddToCart }) => {
  const botinki = goods.filter((item) => {
    return item.category === "Ботинки";
  });
  console.log("Ботинки", botinki);

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
            marginLeft: "126px",
            fontSize: "30px",
          }}
        >
          Ботинки
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
        ) : botinki.length === 0 ? (
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
          botinki.map((good) => (
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

// КЕДЫ
export const Kedy = ({ loading, goods, getGood, AddToCart }) => {
  const kedy = goods.filter((item) => {
    return item.category === "Кеды";
  });
  console.log("Кеды", kedy);

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
            marginLeft: "165px",
            fontSize: "30px",
          }}
        >
          Кеды
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
        ) : kedy.length === 0 ? (
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
          kedy.map((good) => (
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

export default Shoes;
