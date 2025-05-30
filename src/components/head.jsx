import "../CSS/header.css";
import headpicture from "../images/header hamburger.webp";
const Head = () => {
  return (
    <>
      <header>
        <div className="picture">
          <img src={headpicture} alt="" />
        </div>
        <div className="title-header">
          <div className="res-name">
            <h1>فست فود رستوران</h1>
            <h1>مک دونالد</h1>
          </div>
          {/* <div className="offer">
            <div className="circle">
              <span>20%</span>
              <span>off</span>
            </div>
            <h3>
              در اولین سفارش خود، اگر به صورت آنلاین از طریق برنامه ما سفارش
              دهید!
            </h3>
          </div> */}
        </div>
      </header>
    </>
  );
};

export default Head;
