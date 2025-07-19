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
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const radius = rect.width / 2;
    const dx = x - radius;
    const dy = y - radius;
    const maxDropRadius = radius * 0.85;

    const isOutside = dx * dx + dy * dy > maxDropRadius * maxDropRadius;

    if (isOutside) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 3000);
      return;
    }

    const newTopping = document.createElement("div");
    newTopping.className = `${type} dropped`;

    if (type === "peperooni" || type === "olivae") {
      newTopping.style.width = "60px";
      newTopping.style.height = "60px";
      newTopping.style.left = `${x - 30}px`;
      newTopping.style.top = `${y - 30}px`;
    } else {
      newTopping.style.width = "90px";
      newTopping.style.height = "90px";
      newTopping.style.left = `${x - 45}px`;
      newTopping.style.top = `${y - 45}px`;
    }
    newTopping.addEventListener("click", () => {
      newTopping.style.display = "none";
    });
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
         <Sideseting/>
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
