import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import {
  admin,
  admin1,
  admin2,
  admin3,
  admin4,
  db,
  storage,
} from "../firebase";
import "../styles/Home.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { Navigation, Pagination } from "swiper";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { useEffect } from "react";
import { Autoplay } from "swiper";
import { CircularProgress } from "@mui/material";
import shoe from "../assets/homecr.jpg";
import cloth from "../assets/homeod.jpg";
import one from "../assets/1.svg";
import two from "../assets/2.svg";
import Footer from "../components/Footer";
import catalog from "../assets/catalog.jpg";

const Home = () => {
  const { user } = useUserAuth();

  // REKLAMA
  const [reklama, setReklama] = useState(null);
  const [uploading, setUploading] = useState(false);
  const reklamaRef = collection(db, "reklamas");

  // UPLOAD IMAGE TO DATA BASE
  const imageListRef = ref(storage, `${Date.now()}`);

  const createReklama = async (e) => {
    e.preventDefault();
    setUploading(true);
    await uploadBytesResumable(imageListRef, reklama).then(() => {
      getDownloadURL(imageListRef).then(async (downloadURL) => {
        try {
          await addDoc(reklamaRef, {
            image: downloadURL,
            id: Date.now(),
          });
          setUploading(false);
          alert("Успешно обновлено");
        } catch (err) {
          alert("Вышла ошибка");
        }
      });
    });
  };

  // GETTING REKLAMA IMAGES
  const [images, setImages] = useState([]);
  console.log("IMAGES", images);
  const [loading, setLoading] = useState(true);

  const imagesCollecton = collection(db, "reklamas");

  useEffect(() => {
    const getImages = async () => {
      const data = await getDocs(imagesCollecton);
      setImages(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getImages();
  }, []);

  // DELETING GOOD
  const deleteImage = async (id) => {
    try {
      const imageDoc = doc(db, "reklamas", id);
      await deleteDoc(imageDoc);
    } catch (err) {
      alert("Ошибка");
    } finally {
      alert("Фото успешно удалено");
    }
  };

  return (
    <div className="container">
      <Link to="/login" style={{ fontSize: '25px', position: 'relative', left: '88px', top: '10px'  }}>Войти в аккаунт</Link>
      <div
        style={{ marginLeft: "42px", marginTop: "25px", marginBottom: "25px" }}
        className="Войти Как Админ"
      >
        {user?.email === admin ||
        user?.email === admin1 ||
        user?.email === admin2 ||
        user?.email === admin3 ||
        user?.email === admin4 ? (
          <Link
            to="/admin"
            style={{
              fontSize: "35px",
            }}
          >
            Войти как админ
          </Link>
        ) : null}
      </div>

      <div className="home">
        <div className="advertisment">
          <Swiper
            style={{
              "--swiper-navigation-color": "#000",
              "--swiper-navigation-size": "25px",
              marginTop: "",
            }}
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            // navigation
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            watchSlidesProgress={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={700}
            pagination={{
              clickable: true,
            }}
          >
            {loading ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress
                  sx={{ marginTop: "47px" }}
                  size={70}
                  color="inherit"
                />
              </div>
            ) : (
              images.map((i) => (
                <SwiperSlide
                  key={i.id}
                  style={{
                    width: "330px",
                    height: "164px",
                    position: "relative",
                  }}
                >
                  {/* ADMIN */}
                  {user?.email === admin ||
                  user?.email === admin1 ||
                  user?.email === admin2 ||
                  user?.email === admin3 ||
                  user?.email === admin4 ? (
                    <svg
                      onClick={() => deleteImage(i.id)}
                      style={{
                        position: "absolute",
                        zIndex: 10,
                        backgroundColor: "white",
                        borderRadius: "50px",
                        right: "0px",
                        cursor: "pointer",
                      }}
                      xmlns="http://www.w3.org/2000/svg"
                      class="icon icon-tabler icon-tabler-trash"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      stroke-width="2"
                      stroke="currentColor"
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <line x1="4" y1="7" x2="20" y2="7" />
                      <line x1="10" y1="11" x2="10" y2="17" />
                      <line x1="14" y1="11" x2="14" y2="17" />
                      <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                      <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                    </svg>
                  ) : null}
                  <img src={i.image} alt="РЕКЛАМА" />
                </SwiperSlide>
              ))
            )}
          </Swiper>
        </div>
        {/* ADMIN  */}
        {user?.email === admin ||
        user?.email === admin1 ||
        user?.email === admin2 ||
        user?.email === admin3 ||
        user?.email === admin4 ? (
          <form onSubmit={createReklama}>
            <input
              type="file"
              id="file"
              required
              style={{ display: "none" }}
              onChange={(e) => setReklama(e.target.files[0])}
            />
            <label htmlFor="file" style={{ cursor: "pointer" }}>
              <div className="select-photo">Выбрать фото</div>
            </label>
            <button className="add-image" type="submit">
              {uploading ? "Загрузка..." : "Добавить"}
            </button>
          </form>
        ) : null}
        <div className="categories">
          <Link to="/catalog">
            <div className="toCatalog">
              <h3>Каталог</h3>
              <img
                style={{
                  width: "100px",
                  height: "auto",
                  borderRadius: "10px",
                  position: "relative",
                  right: "-140px",
                }}
                src={catalog}
                alt="catalog"
              />
            </div>
          </Link>
          <Link to="/shoes">
            <div className="shoes">
              <h3>Обувь</h3>
              <img
                style={{
                  width: "100px",
                  position: "absolute",
                  top: "4px",
                  height: "100px",
                  right: "6px",
                  borderRadius: "10px",
                }}
                src={shoe}
                alt=""
              />
            </div>
          </Link>
          <Link to="/clothes">
            <div className="dress">
              <h3>Одежда</h3>
              <img
                style={{
                  width: "140px",
                  height: "90px",
                  borderRadius: "10px",
                }}
                src={cloth}
                alt=""
              />
            </div>
          </Link>
          <Link to="/aksesuar">
            <div className="aksesuar">
              <h3>Аксессуары</h3>
              <img src={one} alt="" />
              <img className="bag" src={two} alt="" />
            </div>
          </Link>
        </div>
        {/* <div className="photos">
          <img src={fone}
          style={{
            width:"360px",
            position: "relative",
            right:"-2px",
            borderRadius:"20px"

          }}
          
          />
          <p
          style={{
            
          }}
          >The North Face</p>
          <button className="btn" style={{
            position: "relative",
            right:"-110px",
            bottom:"80px",
            backgroundColor:"white",
            left:"30px"
          }}>
            смотреть 
          </button>
        </div> */}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
