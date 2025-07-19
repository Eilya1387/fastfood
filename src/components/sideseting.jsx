import "../CSS/sideseting.css";
import { useState } from "react";
const Sideseting = () => {
  const [spicyLevel, setSpicyLevel] = useState(1);
  const [cheeseLevel, setCheeseLevel] = useState(1);
  const [open, setopen] = useState(false);
  return (
    <div
      className="side-master"
      style={{
        transform: open ? "translateX(0)" : "translateX(-29rem)",
        transition: "transform 0.4s ease-in-out",
      }}
    >
      <div className="side-container" dir="rtl">
        <h2 className="side-title">تنظیمات سفارش 🍕</h2>

        <div className="side-section">
          <label>سایز نان:</label>
          <select>
            <option>مینی</option>
            <option>معمولی</option>
            <option>خانواده</option>
          </select>
        </div>

        <div className="side-section">
          <label>میزان تندی: {spicyLevel}x</label>
          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={spicyLevel}
            onChange={(e) => setSpicyLevel(e.target.value)}
          />

          <label>میزان پنیر پیتزا: {cheeseLevel}x</label>
          <input
            type="range"
            min="1"
            max="4"
            step="1"
            value={cheeseLevel}
            onChange={(e) => setCheeseLevel(e.target.value)}
          />
        </div>
        <div className="dr-su">
          <div className="side-section">
            <label>سس‌ها:</label>
            <div className="sauce-list">
              <div className="su-child">
                <label>سس سفید:</label>
                <input type="number" min="0" defaultValue="0" />
              </div>
              <div className="su-child">
                <label>سس قرمز:</label>
                <input type="number" min="0" defaultValue="0" />
              </div>
              <div className="su-child">
                <label>سس باربیکیو:</label>
                <input type="number" min="0" defaultValue="0" />
              </div>
            </div>
          </div>

          <div className="side-section">
            <label>نوشیدنی:</label>
            <div className="drink-list">
              <div className="su-child">
                <label>آب:</label>
                <input type="number" min="0" defaultValue="0" />
              </div>
              <div className="su-child">
                <label>نوشابه:</label>
                <input type="number" min="0" defaultValue="0" />
              </div>
              <div className="su-child">
                <label>دلستر:</label>
                <input type="number" min="0" defaultValue="0" />
              </div>
            </div>
          </div>
        </div>
        <button className="submit-button">ثبت سفارش</button>
      </div>

      <div className="r-icon" onClick={() => setopen(!open)}>
        <i className={`bi ${open?"bi-chevron-double-left":"bi-chevron-double-right"}`}></i>
      </div>
    </div>
  );
};

export default Sideseting;
