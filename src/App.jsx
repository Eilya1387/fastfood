import "./App.css";
import mclogo from "./images/mcdonald.png";
import Home from "./components/home";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import HamburgerMenu from "./components/hamburgermenu";
import Headmenu from "./components/headmenu";
function App() {
  return (
    <>
      <div className="head-container">
        <Headmenu/>
        <div className="btn-container">
          <Link to="/signin">
            <button>ثبت نام</button>
          </Link>
          <Link to="/login">
            <button>ورود</button>
          </Link>
        </div>
        <div className="items">
          <ul>
            <li>
              <Link to="/">خانه</Link>
            </li>
            <li>
              <Link to="/Order">سفارش</Link>
            </li>
            <li>
              <Link to="/About">درباره ما</Link>
            </li>
            <li>
              <Link to="/Contact">ارتباط با ما</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={mclogo} alt="Logo" />
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Order" element={<HamburgerMenu />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/*" element={<Navigate to={"Error"} />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
