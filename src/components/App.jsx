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
import PrivateRoute from "../helpers/PrivateRoute";
import RestrictedRoute from "../helpers/RestrictedRoute";
import SideMenu from "./sideMenu/SideMenu";
import { selectSideMenuOpen } from "../redux/settings/selectors";
function App() {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();
  const isSideMenuOpen = useSelector(selectSideMenuOpen);
  useEffect(() => {
    dispatch(refreshUser(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  return (
    <>
      <Navigation></Navigation>

      <main className="App">
        <Routes>
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/products" component={<Login />} />
            }
          ></Route>
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/products"
                component={<Register />}
              />
            }
          ></Route>
          <Route
            path="/products"
            element={
              <PrivateRoute redirectTo="/login" component={<Products />} />
            }
          ></Route>
          <Route
            path="/products/:product"
            element={
              <PrivateRoute redirectTo="/login" component={<SingleProduct />} />
            }
          ></Route>
        </Routes>
        {isSideMenuOpen && <SideMenu />}
      </main>
    </>
  );
}

export default App;
