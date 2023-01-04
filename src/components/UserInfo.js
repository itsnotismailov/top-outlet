import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const UserInfo = () => {
  const { logOut, user } = useUserAuth();
  const navigate = useNavigate();
  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/cart");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div>
          {user ? (
            <>
              <div style={{ display: "flex", marginTop: "10px" }}>
                <img
                  style={{
                    width: "80px",
                    height: "80px",
                    borderRadius: "50px",
                  }}
                  src={user.photoURL}
                  alt={"ФОТО ОТСУТСТВУЕТ"}
                />
                <h1 style={{ marginTop: "20px", marginLeft: "15px" }}>
                  {user.displayName}
                </h1>
              </div>
              <hr />
              <h5 style={{ fontSize: "25px" }}>ВЫ ВОШЛИ В АККАУНТ</h5>
            </>
          ) : (
            <h5>Войдите в аккаунт, чтобы сделать заказ</h5>
          )}
          <div>
            <hr />
            {!user ? (
              <button className="butto" onClick={() => navigate("/login")}>
                Войти в аккаунт
              </button>
            ) : (
              <button className="butto" onClick={handleLogout}>
                Выйти из аккаунта
              </button>
            )}
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
