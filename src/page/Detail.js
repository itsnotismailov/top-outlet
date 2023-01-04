import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Detail.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Detail = ({ good, AddToCart, loadingGood }) => {
  console.log("GOOD", good);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate();

  return (
    <div className="product">
      <div
        onClick={() => navigate(-1)}
        style={{ left: "10px", marginBottom: "20px" }}
        className="back"
      >
        <span className="span">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </span>
        <span className="span" style={{ marginLeft: "0px" }}>
          Назад
        </span>
      </div>

      {loadingGood ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress
            sx={{ marginTop: "50px", marginBottom: "500px" }}
            size={100}
            color="inherit"
          />
        </div>
      ) : (
        <>
          <div className="product-image" style={{ marginBottom: "25px" }}>
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[Pagination]}
              watchSlidesProgress={true}
              loop={true}
              speed={500}
              pagination={{
                clickable: true,
              }}
            >
              {/* 1-IMAGE  */}
              <SwiperSlide
                style={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  style={{
                    height: "380px",
                    width: "365px",
                    borderRadius: "20px",
                  }}
                  src={good?.image}
                  alt={"фото отсутствует"}
                />
              </SwiperSlide>
              {/* 2-IMAGE  */}
              {good?.image1 === "" ? null : (
                <SwiperSlide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    style={{
                      height: "380px",
                      width: "365px",
                      borderRadius: "20px",
                    }}
                    src={good?.image1}
                    alt={"фото отсутствует"}
                  />
                </SwiperSlide>
              )}
              {/* 3-IMAGE  */}
              {good?.image2 === "" ? null : (
                <SwiperSlide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    style={{
                      height: "380px",
                      width: "365px",
                      borderRadius: "20px",
                    }}
                    src={good?.image2}
                    alt={"фото отсутствует"}
                  />
                </SwiperSlide>
              )}
              {/* 4-IMAGE  */}
              {good?.image3 === "" ? null : (
                <SwiperSlide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    style={{
                      height: "380px",
                      width: "365px",
                      borderRadius: "20px",
                    }}
                    src={good?.image3}
                    alt={"фото отсутствует"}
                  />
                </SwiperSlide>
              )}
              {/* 5-IMAGE  */}
              {good?.image4 === "" ? null : (
                <SwiperSlide
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    style={{
                      height: "380px",
                      width: "365px",
                      borderRadius: "20px",
                    }}
                    src={good?.image4}
                    alt={"фото отсутствует"}
                  />
                </SwiperSlide>
              )}
              {/* THE END OF SLIDES  */}
            </Swiper>
          </div>

          <div className="detail-info">
            <h4>
              <span>Бренд:</span> {good?.title}
            </h4>
            <hr />
            <h4>
              <span>Цена:</span> {good?.price} $
            </h4>
            <hr />
            <h4>
              <span>Размеры:</span>{" "}
              {good?.sizes?.map((i) => (
                <>{i}, </>
              ))}
            </h4>
            <hr />
            <h4>
              <span>Категория:</span> {good?.category}
            </h4>
            <hr />
            <h4>
              <span>Для Кого:</span> {good?.type}
            </h4>
            <hr />
            <h4 className="colored">
              <span>Цвет:</span>{" "}
              <div style={{ backgroundColor: `${good?.color}` }}></div>
            </h4>
            <hr />
            <h4 className="description">
              <span>Описание:</span> {good?.description}
            </h4>
            <hr />
            <h4>
              <span>Опубликовано в:</span> {good?.date}
            </h4>
            <hr />
          </div>
          <div
            onClick={() => alert("Товар успешно добавлен в корзину")}
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}
          >
            <button className="butto" onClick={() => AddToCart(good)}>
              Добавить в корзину
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Detail;
