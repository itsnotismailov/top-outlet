import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "50px", marginTop: "20px" }}>
        Такой Страницы нет ☹
      </h1>
      <Link
        to="/"
        style={{ fontSize: "40px", marginBottom: "100px", marginTop: "50px" }}
      >
        Вернуться на главную страницу
      </Link>
    </div>
  );
};

export default Error;
