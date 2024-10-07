import "../App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Navigation from "./header/Header";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from "../redux/auth/thunk";
import { selectUserId } from "../redux/auth/selectors";
// import { handlePageEvents } from "../helpers/handlePageEvents";
function App() {
  const userId = useSelector(selectUserId);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser(userId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Navigation></Navigation>

      <main className="App">
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </main>
    </>
  );
}

export default App;
