import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/AdminGoods.scss";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useState } from "react";
import Category from "../components/dropdowns/Category";
import Type from "../components/dropdowns/Type";
import { CircularProgress } from "@mui/material";
import {
  getDownloadURL,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { addDoc, collection } from "firebase/firestore";
import { db, storage } from "../firebase";
import { v4 } from "uuid";
import SelectSizeAdmin from "../components/dropdowns/SelectSizeAdmin";
import Footer from "../components/Footer";

const AdminGoods = ({ deleteGood, goods, loading }) => {
  // SEARCH
  const [search, setSearch] = useState("");

  const filteredData = goods?.filter((item) => {
    return search?.toLowerCase() === ""
      ? item
      : item?.title?.toLowerCase().includes(search?.toLowerCase()) ||
          item?.type?.toLowerCase().includes(search?.toLowerCase()) ||
          item?.category?.toLowerCase().includes(search?.toLowerCase()) ||
          item?.date?.toLowerCase().includes(search?.toLowerCase());
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // SELECT SIZE
  const [personName, setPersonName] = React.useState([]);

  //CREATING GOOD
  const [category, setCategory] = useState("");
  const [color, setColor] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [image3, setImage3] = useState("");
  const [image4, setImage4] = useState("");
  const [price, setPrice] = useState(0);
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [uploading, setUploading] = useState(false);
  const goodsCollectionRef = collection(db, "goods");

  const createGood = async (e) => {
    e.preventDefault();
    setUploading(true);
    ///// 1-IMAGE
    const imageListRef = ref(storage, `images/${image?.name + v4()}`);
    await uploadBytesResumable(imageListRef, image).then(() => {
      getDownloadURL(imageListRef).then(async (downloadURL) => {
        ////// 2-IMAGE
        const imageRef = ref(storage, `${image1.name + v4()}`);
        await uploadBytes(imageRef, image1).then((snapshot) => {
          getDownloadURL(snapshot.ref).then(async (url) => {
            ////// 3-IMAGE
            const imageRef1 = ref(storage, `${image2.name + v4()}`);
            await uploadBytes(imageRef1, image2).then((snapshot) => {
              getDownloadURL(snapshot.ref).then(async (url2) => {
                ///// 4-IMAGE
                const imageRef2 = ref(storage, `${image3.name + v4()}`);
                await uploadBytes(imageRef2, image3).then((snapshot) => {
                  getDownloadURL(snapshot.ref).then(async (url3) => {
                    ///// 5-IMAGE
                    const imageRef3 = ref(storage, `${image4.name + v4()}`);
                    await uploadBytes(imageRef3, image4).then((snapshot) => {
                      getDownloadURL(snapshot.ref).then(async (url4) => {
                        try {
                          await addDoc(goodsCollectionRef, {
                            category: category,
                            color: color,
                            description: description,
                            id: Date.now(),
                            date: published,
                            price: price,
                            title: title,
                            type: type,
                            image: downloadURL,
                            image1: image1 === "" ? "" : url,
                            image2: image2 === "" ? "" : url2,
                            image3: image3 === "" ? "" : url3,
                            image4: image4 === "" ? "" : url4,
                            quantity: 1,
                            sizes: personName,
                          });
                          setUploading(false);
                          alert("ТОВАР УСПЕШНО ДОБАВЛЕН");
                          setCategory("");
                          setType("");
                          setColor("black");
                          setDescription("");
                          setImage("");
                          setImage1("");
                          setImage2("");
                          setImage3("");
                          setImage4("");
                          setPrice(0);
                          setTitle("");
                          setPersonName([]);
                        } catch (err) {
                          console.log(err);
                          alert("Ошибка при добавлении товара");
                        }
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  };

  // TIME
  let ts = new Date();
  let published = ts.toLocaleString();

  return (
    <div className="container">
      <div style={{ left: "10px", marginBottom: "20px" }} className="back">
        <Link to="/">
          <ArrowBackIosIcon sx={{ marginBottom: "3px" }} color={"primary"} />
        </Link>
        <Link style={{ marginLeft: "0px" }} to="/admin">
          Назад
        </Link>
      </div>

      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
            marginBottom: "500px",
          }}
        >
          <CircularProgress size={100} color="inherit" />
        </div>
      ) : (
        <>
          <form className="form" onSubmit={createGood}>
            <h1>Добавить товар</h1>
            <Category setCategory={setCategory} category={category} />
            <Type type={type} setType={setType} />

            {/* 1-IMAGE */}
            <input
              className="input-admin"
              onChange={(e) => setImage(e.target.files[0])}
              required
              multiple
              style={{ display: "none" }}
              type="file"
              id="file"
            />
            <label htmlFor="file" style={{ cursor: "pointer" }}>
              <div
                style={image !== "" ? { backgroundColor: "grey" } : null}
                className="button"
              >
                Добавить Фото
              </div>
            </label>
            {/* 2-IMAGE  */}
            <input
              className="input-admin"
              onChange={(e) => setImage1(e.target.files[0])}
              multiple
              style={{ display: "none" }}
              type="file"
              id="file1"
            />
            <label htmlFor="file1" style={{ cursor: "pointer" }}>
              <div
                style={image1 !== "" ? { backgroundColor: "grey" } : null}
                className="button"
              >
                2-Фото
              </div>
            </label>
            {/* 3-IMAGE */}
            <input
              className="input-admin"
              onChange={(e) => setImage2(e.target.files[0])}
              multiple
              style={{ display: "none" }}
              type="file"
              id="file2"
            />
            <label htmlFor="file2" style={{ cursor: "pointer" }}>
              <div
                style={image2 !== "" ? { backgroundColor: "grey" } : null}
                className="button"
              >
                3-Фото
              </div>
            </label>
            {/* 4-IMAGE */}
            <input
              className="input-admin"
              onChange={(e) => setImage3(e.target.files[0])}
              multiple
              style={{ display: "none" }}
              type="file"
              id="file3"
            />
            <label htmlFor="file3" style={{ cursor: "pointer" }}>
              <div
                style={image3 !== "" ? { backgroundColor: "grey" } : null}
                className="button"
              >
                4-Фото
              </div>
            </label>
            {/* 5-IMAGE */}
            <input
              className="input-admin"
              onChange={(e) => setImage4(e.target.files[0])}
              multiple
              style={{ display: "none" }}
              type="file"
              id="file4"
            />
            <label htmlFor="file4" style={{ cursor: "pointer" }}>
              <div
                style={image4 !== "" ? { backgroundColor: "grey" } : null}
                className="button"
              >
                5-Фото
              </div>
            </label>
            {/* THE END OF IMAGES */}
            <input
              className="input-admin"
              required
              onChange={(e) => setColor(e.target.value)}
              type="color"
              placeholder="цвет"
              style={{ display: "none" }}
              id="color"
            />
            <label htmlFor="color" style={{ cursor: "pointer" }}>
              <div
                style={color !== "" ? { backgroundColor: color } : null}
                className="button"
              >
                Добавить Цвет
              </div>
            </label>
            <input
              className="input-admin"
              required
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              placeholder="Бренд..."
            />
            <input
              className="input-admin"
              required
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="Описания..."
            />
            <input
              className="input-admin"
              required
              onChange={(e) => setPrice(e.target.value)}
              type="number"
              placeholder="Цена...(в долларах)"
            />
            <SelectSizeAdmin
              personName={personName}
              setPersonName={setPersonName}
            />
            <button className="submit" type="submit">
              {uploading ? "Идет загрузка..." : "Добавить"}
            </button>
          </form>

          <h1
            style={{ marginLeft: "10px", marginTop: "10px", fontSize: "28px" }}
          >
            Количество: {goods.length}
          </h1>

          <input
            style={{ marginBottom: "100px" }}
            onChange={(e) => setSearch(e.target.value)}
            className="input-admins"
            type="text"
            placeholder="Искать товар..."
          />
          {goods.length === 0 && (
            <h1 style={{ position: "relative", bottom: "50px", left: "80px" }}>
              Нет товаров...
            </h1>
          )}
          <div className="goods" style={{ marginBottom: "100px" }}>
            {filteredData.map((good) => (
              <div key={good.id} className="good">
                <div className="image">
                  <img src={good.image} alt="" />
                </div>

                <div className="good-info">
                  <h6>
                    <span>Бренд:</span> {good.title}
                  </h6>
                  <h6>
                    <span>Цена:</span> {good.price} $
                  </h6>
                  <h6>
                    <span>Категория:</span> {good.category}
                  </h6>
                  <h6>
                    <span>Тип:</span> {good.type}
                  </h6>
                  <h6>
                    <span>Размеры:</span> {good.sizes.map(size => <span style={{ fontWeight: 500 }}>{size}, </span> )}
                  </h6>
                  <span></span>
                  <h6>
                    <span>Опубликовано:</span> {good.date}
                  </h6>
                  <button onClick={() => deleteGood(good.id)}>
                    УДАЛИТЬ ТОВАР
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <Footer />
    </div>
  );
};

export default AdminGoods;
