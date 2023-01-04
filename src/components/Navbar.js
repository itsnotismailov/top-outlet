import React from "react";
import "../styles/Navbar.scss";
import logo from "../assets/logo.svg";
import cart from "../assets/cart.svg";
import search from "../assets/search.svg";
import { Link, useNavigate } from "react-router-dom";
import Modal from "../components/modals/Burger";
import { useState } from "react";
import black from "../assets/x.svg";

const Navbar = ({ number, goods, setGoods, setSearch }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setSearch(e.target.value);
    navigate("/catalog");
  };

  return (
    <nav>
      <div className="burger">
        <Modal />
      </div>
      <div className="two-items">
        <div className="logo">
          <Link to="/">
            <h3>TOP OUTLET</h3>
          </Link>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="basket" style={{ position: "relative" }}>
          <Link to="/cart">
            <img src={cart} alt="" />
          </Link>
          <div
            style={
              open
                ? {
                    position: "absolute",
                    height: "22px",
                    top: "-15px",
                    right: "28px",
                    color: "white",
                    backgroundColor: "grey",
                    borderRadius: "50px",
                  }
                : {
                    position: "absolute",
                    height: "22px",
                    top: "-15px",
                    right: "28px",
                    color: "white",
                    backgroundColor: "grey",
                    borderRadius: "50px",
                  }
            }
          >
            <h5
              onClick={() => navigate("/cart")}
              style={{ position: "relative", bottom: "2px", cursor: "pointer" }}
            >
              {number}
            </h5>
          </div>
          <img onClick={() => setOpen(!open)} src={search} alt="" />
          {open && (
            <>
              <input
                className="search-input"
                type="text"
                placeholder="Поиск..."
                onChange={(e) => handleChange(e)}
              />
              <img
                onClick={() => setOpen(!open)}
                style={{
                  position: "absolute",
                  left: "50px",
                  top: "68px",
                  zIndex: "1000",
                  width: "25px",
                }}
                src={black}
                alt=""
              />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
