import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import { useUserAuth } from "./context/UserAuthContext";
import Navbar from "./components/Navbar";
import Error from "./page/Error";
import Admin from "./page/Admin";
import { useState } from "react";
import { useEffect } from "react";
import { admin, admin1, admin2, admin3, admin4, db } from "./firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import Detail from "./page/Detail";
import Cart from "./page/Cart";
import AdminGoods from "./page/AdminGoods";
import Catalog from "./page/Catalog";
import Home from "./page/Home";
import Shoes, { Botinki, Kedy, Krosovki, Slans } from "./page/Shoes";
import Clothes, {
  Bruki,
  Jiletki,
  Kepki,
  Kurtki,
  Noski,
  Panamy,
  Phutbolki,
  Shapki,
  Tolstovki,
} from "./page/Clothes";
import Aksesuar, {
  Gantel,
  Inventar,
  Rukzak,
  Skakalka,
  Trenajer,
} from "./page/Aksesuar";
import Support from "./page/Support";
import Dostavka from "./page/Dostavka";
import Vozvrat from "./page/Vozvrat";
import About from "./page/About";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

function App() {
  const { user } = useUserAuth();

  // LOADING
  const [loading, setLoading] = useState(true);
  const [loadingGood, setLoadingGood] = useState(true);

  // THE DATA
  const [goods, setGoods] = useState([]);
  const [good, setGood] = useState({});
  console.log("DATA", goods);

  // GETTING GOODS
  const goodsCollectionRef = collection(db, "goods");
  useEffect(() => {
    const getGoods = async () => {
      const data = await getDocs(goodsCollectionRef);
      setGoods(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setLoading(false);
    };
    getGoods();
  }, []);

  // GETTING GOOD
  const getGood = async (id) => {
    const goodCollectionRef = doc(db, "goods", id);
    const data = await getDoc(goodCollectionRef);
    setGood(data.data());
    setLoadingGood(false);
  };

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

  //ADD TO CART
  const [cartItems, setCartItems] = useState(cartFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const AddToCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  //REMOVE FROM CART
  const RemoveFromCart = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id === product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };

  //REMOVE PER ITEM FROM CART
  const handleRemove = (id) => {
    const arr = cartItems.filter((item) => item.id !== id);
    setCartItems(arr);
  };

  // DELETING GOOD
  const deleteGood = async (id) => {
    try {
      const goodDoc = doc(db, "goods", id);
      await deleteDoc(goodDoc);
    } catch (err) {
      console.log(err);
    } finally {
      alert("Товар успешно удален");
    }
  };

  // PAYMENT CONFIRMATION
  const [paid, setPaid] = useState(false);

  return (
    <>
      <Navbar
        setSearch={setSearch}
        setGoods={setGoods}
        goods={goods}
        number={cartItems.length}
      />
      <Routes>
        {/* HOME  */}
        <Route path="/" element={<Home />} />
        {/* CATALOG  */}
        <Route
          path="/catalog"
          element={
            <Catalog
              filteredData={filteredData}
              good={good}
              getGood={getGood}
              goods={goods}
              deleteGood={deleteGood}
              AddToCart={AddToCart}
              loading={loading}
            />
          }
        />
        {/* SHOES  */}
        <Route
          path="/shoes"
          element={
            <Shoes
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* KROSOVKI  */}
        <Route
          path="/shoes/krosovki"
          element={
            <Krosovki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* SLANS  */}
        <Route
          path="/shoes/slans"
          element={
            <Slans
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* BOTINKI  */}
        <Route
          path="/shoes/botinki"
          element={
            <Botinki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* KEDY  */}
        <Route
          path="/shoes/kedy"
          element={
            <Kedy
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* CLOTHES  */}
        <Route
          path="/clothes"
          element={
            <Clothes
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* ФУТБОЛКИ  */}
        <Route
          path="/clothes/phutbolki"
          element={
            <Phutbolki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* ШАПКИ  */}
        <Route
          path="/clothes/shapki"
          element={
            <Shapki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* ПАНАМЫ  */}
        <Route
          path="/clothes/panamy"
          element={
            <Panamy
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* НОСКИ  */}
        <Route
          path="/clothes/noski"
          element={
            <Noski
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* КЕПКИ  */}
        <Route
          path="/clothes/cap"
          element={
            <Kepki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* TOLSTOVKI  */}
        <Route
          path="/clothes/tolstovka"
          element={
            <Tolstovki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* КУРТКИ  */}
        <Route
          path="/clothes/kurtka"
          element={
            <Kurtki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* БРЮКИ  */}
        <Route
          path="/clothes/bruki"
          element={
            <Bruki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* ЖИЛЕТКИ  */}
        <Route
          path="/clothes/jiletki"
          element={
            <Jiletki
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* AKSESUAR  */}
        <Route
          path="/aksesuar"
          element={
            <Aksesuar
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* ГАНТЕЛЬ  */}
        <Route
          path="/aksesuar/gantel"
          element={
            <Gantel
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* СКАКАЛКА  */}
        <Route
          path="/aksesuar/skakalka"
          element={
            <Skakalka
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* ТРЕНАЖЕР  */}
        <Route
          path="/aksesuar/trenajer"
          element={
            <Trenajer
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* СПОРТИВНЫЙ ИНВЕНТАРЬ */}
        <Route
          path="/aksesuar/inventar"
          element={
            <Inventar
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* РЮКЗАКИ  */}
        <Route
          path="/aksesuar/rukzak"
          element={
            <Rukzak
              loading={loading}
              goods={goods}
              AddToCart={AddToCart}
              getGood={getGood}
            />
          }
        />
        {/* DETAIL  */}
        <Route
          path="/good/:id"
          element={
            <Detail
              AddToCart={AddToCart}
              good={good}
              loadingGood={loadingGood}
            />
          }
        />
        {/* SUPPORT  */}
        <Route path="/support" element={<Support />} />
        {/* DOSTAVKA  */}
        <Route path="/dostavka" element={<Dostavka />} />
        {/* ВОЗВРАТ  */}
        <Route path="/vozvrat" element={<Vozvrat />} />
        {/* О НАС  */}
        <Route path="/about" element={<About />} />
        {/* CART  */}
        <Route
          path="/cart"
          element={
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              AddToCart={AddToCart}
              RemoveFromCart={RemoveFromCart}
              handleRemove={handleRemove}
            />
          }
        />
        {/* LOGIN  */}
        <Route path="/login" element={<Login />} />
        {/* SIGNUP  */}
        <Route path="/signup" element={<Signup />} />
        {/* PHONE SIGN UP  */}
        <Route path="/phonesignup" element={<PhoneSignUp />} />
        {/* Suppor */}
        <Route path="/support" element={<Support />} />
        {/* ERROR  */}
        <Route path="*" element={<Error />} />
        {/* ADMIN  */}
        {user?.email === admin ||
        user?.email === admin1 ||
        user?.email === admin2 ||
        user?.email === admin3 ||
        user?.email === admin4 ? (
          <Route
            path="/admin"
            element={<Admin paid={paid} setPaid={setPaid} goods={goods} />}
          />
        ) : null}
        {/* ADMIN GOODS  */}
        {user?.email === admin ||
        user?.email === admin1 ||
        user?.email === admin2 ||
        user?.email === admin3 ||
        user?.email === admin4 ? (
          <Route
            path="/admin/goods"
            element={
              <AdminGoods
                setGoods={setGoods}
                goods={goods}
                deleteGood={deleteGood}
                loading={loading}
              />
            }
          />
        ) : null}
      </Routes>
    </>
  );
}

export default App;
