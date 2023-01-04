import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <hr />
      <div className="footer">
        <Link to="/dostavka">Доставка и оплата</Link>
        <Link to="/about">О Нас</Link>
        <Link to="/vozvrat">Обмен и возврат</Link>
      </div>
    </div>
  );
};

export default Footer;
