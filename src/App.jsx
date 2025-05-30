import "./App.css";
import mclogo from "../public/mcdonald.png"
function App() {
  return (
    <>
      <div className="head-container">
        <div className="btn-container">
          <a href="#"><button>ثبت نام</button></a>
         <a href="#"><button>ورود</button></a>
        </div>
        <div className="items">
          <ul>
            <li><a href="#">خانه</a></li>
            <li><a href="#">سفارش</a></li>
            <li><a href="#">درباره ما</a></li>
            <li><a href="#">ارتباط با ما</a></li>
          </ul>
        </div>
        <div className="logo">
          <img src={mclogo} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default App;
