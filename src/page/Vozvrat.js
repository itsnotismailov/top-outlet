import React from "react";
import { useEffect } from "react";
import vozvrat from "../assets/vozvrat.svg";
import Footer from "../components/Footer";

const Vozvrat = () => {

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
        ОБМЕН И ВОЗВРАТ
      </h1>
      <p className="vozvrat">
        Если вам не подошёл тот,или иной товар,вы можете оформить возврат
        товара.Возврат действует в течении 10 дней с момента получения
      </p>
      <p className="vozvrat">
        {" "}
        Если вы хотите оформить возврат через 2 и более дней с момента
        получения,то возврат будет невозможен
      </p>
      <img
        style={{ marginTop: "20px", marginBottom: "100px", marginLeft: "85px" }}
        src={vozvrat}
        alt=""
      />
      <Footer />
    </div>
  );
};

export default Vozvrat;
