import { CircularProgress } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import "../styles/Catalog.scss";
import Footer from "../components/Footer";

const Catalog = ({
  goods,
  getGood,
  good,
  AddToCart,
  loading,
  filteredData,
}) => {
  console.log("GOOD", good);

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (loading) {
    return (
      <div
        className="container"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <CircularProgress
          sx={{ marginTop: "100px", marginBottom: "500px" }}
          size={100}
          color="inherit"
        />
      </div>
    );
  }

  return (
    <div className="container">
      <div className="back" style={{ right: "-10px", marginBottom: "18px" }}>
        <Link to="/">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </Link>
        <Link to="/">Назад</Link>
        <h1
          style={{
            color: "#000000",
            fontWeight: 700,
            marginTop: "10px",
            fontSize: "35px",
          }}
        >
          Каталог
        </h1>
      </div>

      <div className="cards">
        {filteredData.length === 0 ? (
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
          filteredData.map((good) => (
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

export default Catalog;
