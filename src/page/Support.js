import React from "react";
import "../styles/Support.scss";
import tg from "../assets/telegram.svg";
import top from "../assets/nick.svg";
import send from "../assets/send.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Support = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container_block">
      <div className="modal_window">
        <img style={{ marginTop: "20px", width: "160px" }} src={top} alt="" />
        <h2 className="que">Есть вопросы?</h2>
        <p className="smile">Мы с удовольствием вам ответим!🤗</p>
      </div>
      <div className="two_modal">
        <a href="https://t.me/top_outlet">
          <h6 style={{ fontWeight: 600, fontSize: "19px" }}>Телеграм группа</h6>
        </a>

        <p>
          Поможем подобрать размер, посмотрим наличие товара, подскажем любые
          детали вашего заказа.
        </p>
        <a style={{ position: "relative" }} href="https://t.me/top_outlet">
          <img
            style={{ position: "absolute", top: "7px", left: "50px" }}
            src={send}
            alt="send"
          />
          <button>Присоединиться</button>
        </a>
      </div>
      <div className="three_modal">
        <h5>Телеграм чат</h5>
        <p>Ответим в течении дня</p>
        <a href="https://t.me/top_outlet">
          <img src={tg} alt="" /> <span>Telegram</span>
        </a>
      </div>
      <hr className="hr" />
      <div className="foote">
        <Link to="/dostavka">Доставка и оплата</Link>
        <Link to="/about">О Нас</Link>
        <Link to="/vozvrat">Обмен и возврат</Link>
      </div>
    </div>
  );
};

export default Support;
