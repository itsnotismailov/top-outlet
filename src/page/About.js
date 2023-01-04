import React, { useEffect } from "react";
import Footer from "../components/Footer";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          marginBottom: "17px",
        }}
      >
        О КОМПАНИИ
      </h1>
      <p className="about">
        TOP OUTLET — это сеть мультибрендовых магазинов, где представлена обувь,
        одежда и аксессуары от мировых спортивных и лайфстайл брендов: Nike,
        Jordan, adidas Originals, Reebok Classic,Under Armour, Asics, PUMA,
        Lacoste,Hugo BOSS,Armany. Магазины Top outlet созданы для людей, которые
        живут в ритме своего города, следят за последними мировыми трендами,
        всегда находят для себя занятие по душе и не представляют жизни без
        удобной обуви и одежды.
      </p>
      <p className="about">
        {" "}
        В Top outlet можно найти классические модели кроссовок, кед и ботинок,
        редкие культовые релизы, а также технологичные баскетбольные новинки.
        Регулярно коллекция в магазинах пополняется эксклюзивными для России
        моделями. В ассортименте top outlet всегда можно найти одежду, в том
        числе верхнюю, разнообразные аксессуары, а также средства для чистки и
        защиты обуви.{" "}
      </p>
      <p className="about">
        {" "}
        Магазины Top outlet созданы для людей, которые живут в ритме своего
        города, следят за последними мировыми трендами, всегда находят для себя
        занятие по душе и не представляют жизни без удобной обуви и одежды.
      </p>
      <Footer />
    </div>
  );
};

export default About;
