import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Headmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);

  const toggleMenu = () => {
    if (!isOpen) {
      setShouldRender(true);
      setTimeout(() => {
        setIsOpen(true);
      }, 10);
    } else {
      setIsOpen(false);
      setTimeout(() => {
        setShouldRender(false);
      }, 300);
    }
  };

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className="bi bi-list"></i>
      </div>

      {shouldRender && (
        <div
          className={`hamburger-menu ${isOpen ? "open" : ""} ${
            !isOpen ? "closing" : ""
          }`}
        >
          <ul>
            <li>
              <Link to="/" onClick={toggleMenu}>
                خانه
              </Link>
            </li>
            <li>
              <Link to="/Order" onClick={toggleMenu}>
                سفارش
              </Link>
            </li>
            <li>
              <Link to="/About" onClick={toggleMenu}>
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/Contact" onClick={toggleMenu}>
                ارتباط با ما
              </Link>
            </li>
            <li>
              <Link to="/login" onClick={toggleMenu}>
                ورود
              </Link>
            </li>
            <li>
              <Link to="/signin" onClick={toggleMenu}>
                ثبت نام
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Headmenu;
