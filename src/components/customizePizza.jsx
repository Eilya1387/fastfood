import { useRef, useState, useEffect } from "react";
import "../CSS/customizePizza.css";
import PopUp from "./popupPage";
import Sideseting from "./sideseting";

const CustomizePizza = () => {
  const [showWarning, setShowWarning] = useState(false);
  const [popup, setPopup] = useState(true);
  const pizzaRef = useRef(null);

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("text/plain", type);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
      }
    };

    const handleKeyDown = (e) => {
      if (e.ctrlKey && (e.key === "+" || e.key === "-" || e.key === "=")) {
        e.preventDefault();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleDrop = (e) => {
    e.preventDefault();

    const type = e.dataTransfer.getData("text/plain");
    const rect = pizzaRef.current.getBoundingClientRect();

    const isMobile = window.innerWidth < 768;

    let x, y;

    if (e.type === "touchend" && e.changedTouches?.length) {
      const touch = e.changedTouches[0];
      x = touch.clientX;
      y = touch.clientY;
    } else {
      x = e.clientX;
      y = e.clientY;
    }

    const radius = rect.width / 2;
    const dx = x - rect.left - radius;
    const dy = y - rect.top - radius;
    const maxDropRadius = radius * 0.75;

    if (dx * dx + dy * dy > maxDropRadius * maxDropRadius) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    const newTopping = document.createElement("div");
    newTopping.className = `${type} dropped`;

let size = (type === "peperooni" || type === "olivae") ? 60 : 90;
if (isMobile) {
  size = size * 0.5;
}
const half = size / 2;

    newTopping.style.width = `${size}px`;
    newTopping.style.height = `${size}px`;
    newTopping.style.left = `${x - rect.left - half}px`;
    newTopping.style.top = `${y - rect.top - half}px`;

    newTopping.addEventListener("click", () => newTopping.remove());
    pizzaRef.current.appendChild(newTopping);
  };

  return (
    <>
      <div
        className={`customize-master ${popup ? "blurred" : ""}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {showWarning && (
          <div className="warning-banner">
            لطفاً آیتم را داخل پیتزا رها کنید 🍕
          </div>
        )}
        {popup && (
          <div className="div-pop">
            <PopUp onclose={() => setPopup(false)} />
          </div>
        )}
        <Sideseting />
        <div
          className="pizza-bun"
          ref={pizzaRef}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        ></div>
        <div className="side-bar">
          <div
            className="peperooni side-child"
            draggable
            onDragStart={(e) => handleDragStart(e, "peperooni")}
          ></div>
          <div
            className="mushroom side-child"
            draggable
            onDragStart={(e) => handleDragStart(e, "mushroom")}
          ></div>
          <div
            className="tomato side-child"
            draggable
            onDragStart={(e) => handleDragStart(e, "tomato")}
          ></div>
          <div
            className="olivae side-child"
            draggable
            onDragStart={(e) => handleDragStart(e, "olivae")}
          ></div>
          <div
            className="painapple side-child"
            draggable
            onDragStart={(e) => handleDragStart(e, "painapple")}
          ></div>
          <div
            className="dulce-piper side-child"
            draggable
            onDragStart={(e) => handleDragStart(e, "dulce-piper")}
          ></div>
        </div>
      </div>
    </>
  );
};

export default CustomizePizza;
