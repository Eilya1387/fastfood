import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Headmenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      setTimeout(() => {
        setIsVisible(false);
      }, 300);
    } else {
      setIsVisible(true);
      setTimeout(() => setIsOpen(true), 10);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <div className="hamburger-icon" onClick={toggleMenu}>
        <i className={isOpen ? "bi bi-x-lg" : "bi bi-list"}></i>
      </div>
      {isVisible && (
        <div className={`hamburger-menu ${isOpen ? "open" : "close"}`}>
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
