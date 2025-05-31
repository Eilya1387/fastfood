import "../CSS/offerproducts.css";
const OffersProducts = () => {
  return (
    <>
      <div className="poster-container">
        <div className="poster-child1">
          <div className="poster1">
            <div className="circle-poster">
              <span>فقط</span>
              <span>10$</span>
            </div>
            <h3>قاچ های سیب زمینی پخته شده با سیر ترد</h3>
            <button>سفارش</button>
          </div>
          <div className="poster2">
            <div className="circle-poster">
              <span>فقط</span>
              <span>15$</span>
            </div>
            <h3>برگر فارم هاوس</h3>
            <button>سفارش</button>
          </div>
        </div>
        <div className="poster-child2">
          <div className="poster3">
            <div className="circle-poster">
              <span>فقط</span>
              <span>18$</span>
            </div>
            <h3>برگر کینوا و لوبیا سیاه</h3>
            <button>سفارش</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default OffersProducts;
