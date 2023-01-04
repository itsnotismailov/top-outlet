import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Hamburger from "hamburger-react";
import { Link } from "react-router-dom";

const style = {
  position: "absolute",
  top: "45%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  height: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "50px",
  gap: 3,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen}>
        <Hamburger
          toggled={open === false ? false : true}
          size={30}
          color="white"
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
              style={{ fontSize: "19px" }}
              onClick={(click) => {
                click && setOpen(!open);
              }}
              to="/"
            >
              Главная страница
            </Link>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
              style={{ fontSize: "19px" }}
              onClick={(click) => {
                click && setOpen(!open);
              }}
              to="/support"
            >
              Техническая Поддержка
            </Link>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
              style={{ fontSize: "19px" }}
              onClick={(click) => {
                click && setOpen(!open);
              }}
              to="/dostavka"
            >
              Доставка и оплата
            </Link>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
              style={{ fontSize: "19px" }}
              onClick={(click) => {
                click && setOpen(!open);
              }}
              to="/about"
            >
              О нас
            </Link>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Link
              style={{ fontSize: "19px" }}
              onClick={(click) => {
                click && setOpen(!open);
              }}
              to="/vozvrat"
            >
              Обмен и возврат
            </Link>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
