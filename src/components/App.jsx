import "../App.css";
import { Routes, Route } from "react-router-dom";
import Main from "../pages/main/Main";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Navigation from "./navigatin/Header";
function App() {
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
