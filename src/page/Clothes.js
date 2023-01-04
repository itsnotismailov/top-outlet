import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import phutbolka from "../assets/fut.jpg";
import shapki from "../assets/cap.jpg";
import panamy from "../assets/jen.jpg";
import noski from "../assets/nos.jpg";
import cap from "../assets/cep.jpg";
import tolstovka from "../assets/pum.jpg";
import kurtka from "../assets/kur.jpg";
import bruki from "../assets/sh.jpg";
import Footer from "../components/Footer";
import jiletka from "../assets/jiletka.jpg";

const Clothes = ({ goods, getGood, AddToCart, loading }) => {
  const navigate = useNavigate();

  const clothes = goods.filter((item) => {
    return (
      item.category === "Футболки" ||
      item.category === "Шапки" ||
      item.category === "Панамы" ||
      item.category === "Носки" ||
      item.category === "Кепки" ||
      item.category === "Толстовки" ||
      item.category === "Куртки" ||
      item.category === "Брюки" ||
      item.category === "Жилетки"
    );
  });
  console.log("SHOES", clothes);

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
            marginLeft: "115px",
          }}
        >
          Одежда
        </h1>
      </div>
      {/* SECTIONS  */}
      <div className="sections">
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/phutbolki">
          <div className="section">
            <h3>Футболки</h3>
            <img
              src={phutbolka}
              style={{ marginLeft: "125px", height: "120px" }}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/shapki">
          <div className="section">
            <h3>Шапки</h3>
            <img
              style={{ marginLeft: "165px", width: "100px" }}
              src={shapki}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/panamy">
          <div className="section">
            <h3>Панамы</h3>
            <img
              style={{ marginLeft: "150px", height: "120px" }}
              src={panamy}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/noski">
          <div className="section">
            <h3>Носки</h3>
            <img style={{ marginLeft: "175px" }} src={noski} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/cap">
          <div className="section">
            <h3>Кепки</h3>
            <img style={{ marginLeft: "165px" }} src={cap} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/tolstovka">
          <div className="section">
            <h3>Толстовки</h3>
            <img
              style={{ marginLeft: "120px", height: "100px" }}
              src={tolstovka}
              alt=""
            />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/kurtka">
          <div className="section">
            <h3>Куртки</h3>
            <img style={{ marginLeft: "160px" }} src={kurtka} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/bruki">
          <div className="section">
            <h3>Брюки</h3>
            <img style={{ marginLeft: "165px" }} src={bruki} alt="" />
          </div>
        </Link>
        <hr style={{ width: "1000px", position: "relative", left: "-50px" }} />
        <Link to="/clothes/jiletki">
          <div className="section">
            <h3>Жилетки</h3>
            <img
              style={{
                marginLeft: "165px",
                width: "100px",
                height: "110px",
                objectFit: "fill",
                position: 'relative',
                right: '21px'
              }}
              src={jiletka}
              alt=""
            />
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
        ) : clothes.length === 0 ? (
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
          clothes.map((good) => (
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

// ФУТБОЛКИ
export const Phutbolki = ({ loading, goods, getGood, AddToCart }) => {
  const phutbolki = goods.filter((item) => {
    return item.category === "Футболки";
  });
  console.log("Футболки", phutbolki);

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
            marginLeft: "107px",
            fontSize: "30px",
          }}
        >
          Футболки
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
        ) : phutbolki.length === 0 ? (
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
          phutbolki.map((good) => (
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

// ЖИЛЕТКИ
export const Jiletki = ({ loading, goods, getGood, AddToCart }) => {
  const jiletki = goods.filter((item) => {
    return item.category === "Жилетки";
  });
  console.log("Жилетки", jiletki);

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
            marginLeft: "115px",
            fontSize: "30px",
          }}
        >
          Жилетки
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
        ) : jiletki.length === 0 ? (
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
          jiletki.map((good) => (
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

// ШАПКИ
export const Shapki = ({ loading, goods, getGood, AddToCart }) => {
  const shapki = goods.filter((item) => {
    return item.category === "Шапки";
  });
  console.log("Шапки", shapki);

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
            marginLeft: "153px",
            fontSize: "30px",
          }}
        >
          Шапки
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
        ) : shapki.length === 0 ? (
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
          shapki.map((good) => (
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

// ПАНАМЫ
export const Panamy = ({ loading, goods, getGood, AddToCart }) => {
  const panamy = goods.filter((item) => {
    return item.category === "Панамы";
  });
  console.log("Панамы", panamy);

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
            marginLeft: "133px",
            fontSize: "30px",
          }}
        >
          Панамы
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
        ) : panamy.length === 0 ? (
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
          panamy.map((good) => (
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

// НОСКИ
export const Noski = ({ loading, goods, getGood, AddToCart }) => {
  const noski = goods.filter((item) => {
    return item.category === "Носки";
  });
  console.log("Носки", noski);

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
            marginLeft: "160px",
            fontSize: "30px",
          }}
        >
          Носки
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
        ) : noski.length === 0 ? (
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
          noski.map((good) => (
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

// КЕПКИ
export const Kepki = ({ loading, goods, getGood, AddToCart }) => {
  const kepki = goods.filter((item) => {
    return item.category === "Кепки";
  });
  console.log("Кепки", kepki);

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
            marginLeft: "160px",
            fontSize: "30px",
          }}
        >
          Кепки
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
        ) : kepki.length === 0 ? (
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
          kepki.map((good) => (
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

// ТОЛСТОВКИ
export const Tolstovki = ({ loading, goods, getGood, AddToCart }) => {
  const tolstovki = goods.filter((item) => {
    return item.category === "Толстовки";
  });
  console.log("Толстовки", tolstovki);

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
            marginLeft: "100px",
            fontSize: "30px",
          }}
        >
          Толстовки
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
        ) : tolstovki.length === 0 ? (
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
          tolstovki.map((good) => (
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

// КУРТКИ
export const Kurtki = ({ loading, goods, getGood, AddToCart }) => {
  const kurtki = goods.filter((item) => {
    return item.category === "Куртки";
  });
  console.log("Куртки", kurtki);

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
            marginLeft: "145px",
            fontSize: "30px",
          }}
        >
          Куртки
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
        ) : kurtki.length === 0 ? (
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
          kurtki.map((good) => (
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

// БРЮКИ
export const Bruki = ({ loading, goods, getGood, AddToCart }) => {
  const bruki = goods.filter((item) => {
    return item.category === "Брюки";
  });
  console.log("Брюки", bruki);

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
            marginLeft: "150px",
            fontSize: "30px",
          }}
        >
          Брюки
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
        ) : bruki.length === 0 ? (
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
          bruki.map((good) => (
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

export default Clothes;
