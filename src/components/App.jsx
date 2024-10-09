import "../App.css";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/products/Products";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Navigation from "./header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/thunk";
import { selectUserId } from "../redux/auth/selectors";
import SingleProduct from "../pages/singleProduct/SingleProduct";
function App() {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <>
      <Navigation></Navigation>

      <main className="App">
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/products/:product" element={<SingleProduct />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
