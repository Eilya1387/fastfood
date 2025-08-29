import "../CSS/dashboard.css";
const InfoDashboard = () => {
  return (
    <>
      <div className="info-master">
        <div className="info-container">
          <div className="child-info">
            <i class="bi bi-cash-coin"></i>
            <span className="price" dir="rtl">
              {" "}
              ۲٬۷۳۹٬۰۰۰<span> تومان</span>{" "}
            </span>
            <span className="des">سود شما</span>
          </div>
          <div className="child-info">
            <i class="bi bi-cart-check"></i>
            <span className="price">8</span>
            <span className="des">تعداد سفارش موفق</span>
          </div>
          <div className="child-info">
            <i class="bi bi-person-circle"></i>
            <span className="price">برنزی</span>
            <span className="des">سطح کاربری</span>
          </div>
          <div className="child-info ls">
            <i class="bi bi-calendar2-week"></i>
            <span className="price">پیتزا یونانی</span>
            <span className="des">آخرین سفارش</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoDashboard;
