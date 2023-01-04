import React, { useEffect } from "react";
import dostavka from "../assets/dostavka.svg";
import Footer from "../components/Footer";

const Dostavka = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="container">
      <h1
        style={{
          fontWeight: 900,
          fontSize: "20px",
          lineHeight: "144.52%",
          letterSpacing: "0.020em",
          color: "#000000",
          marginTop: "31px",
          marginBottom: "69px",
        }}
      >
        Доставка и оплата
      </h1>
      <p className="dostavka">
        Доставка действует в течение 7-15 дней с момента оформления заказа.
      </p>
      <p className="dostavka">
        {" "}
        Способы оплаты:<br/> Visa <br/> Мир<br/> Элкарт<br/> Kaspi <br/>
Mbank <br/> Кошелек  O деньги<br/> Баланс O<br/>  карта Optima
      </p>
      <img
        style={{ marginTop: "20px", marginBottom: "259px" }}
        src={dostavka}
        alt=""
      />

      <Footer />
    </div>
  );
};

export default Dostavka;
