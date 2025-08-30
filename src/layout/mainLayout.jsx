import { Outlet, Link } from "react-router-dom";
import Headmenu from "../components/headmenu";
import mclogo from "../images/mcdonald.png";
import { useEffect, useState } from "react";

const MainLayout = () => {
  const [cartcount, setcartcount] = useState(0);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("cart");
      const cart = saved ? JSON.parse(saved) : [];
      const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
      setcartcount(totalItems);
    } catch (e) {
      setcartcount(0);
    }
  }, []);

  return (
    <>
      <div className="head-container">
        <Headmenu />
        <div className="btn-container">
          <Link to="/Auth">
            <button>ثبت نام</button>
          </Link>
          <Link to="/Auth">
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
              <Link to="/dashboard" dir="rtl">
                <sup>{cartcount}</sup>داشبورد
              </Link>
            </li>
            <li>
              <Link to="/customizePizza">پیتزا سفارشی</Link>
            </li>
          </ul>
        </div>
        <div className="logo">
          <img src={mclogo} alt="Logo" />
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default MainLayout;
