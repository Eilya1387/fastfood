import { Outlet, Link } from "react-router-dom";
import Headmenu from "../components/headmenu";
import mclogo from "../images/mcdonald.png";

const MainLayout = () => {
  return (
    <>
      <div className="head-container">
        <Headmenu/>
        <div className="btn-container">
          <Link to="/dashboard">
            <button>ثبت نام</button>
          </Link>
          <Link to="/dashboard">
            <button>ورود</button>
          </Link>
        </div>
        <div className="items">
          <ul>
            <li><Link to="/">خانه</Link></li>
            <li><Link to="/Order">سفارش</Link></li>
            <li><Link to="/dashboard">داشبورد</Link></li>
            <li><Link to="/customizePizza">پیتزا سفارشی</Link></li>
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
