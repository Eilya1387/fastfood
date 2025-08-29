import HamburgerCard from "./hamburgerCard";
import "../CSS/hamburgerMenu.css";
const HamburgerMenu = () => {


  const products = [
{
  id: 1,
  name: "چیکن برگر",
  price: 270000,
  image: "/burgers/Chicken Burger.webp",
},
{
  id: 2,
  name: "فتبوی برگر",
  price: 195000,
  image: "/burgers/Fatboy Burger.webp",
},
{
  id: 3,
  name: "همبرگر کلاسیک",
  price: 240000,
  image: "/burgers/Classic Smash.webp",
},
{
  id: 4,
  name: "ناین برگر",
  price: 309000,
  image: "/burgers/Burger Nine.webp",
},
{
  id: 5,
  name: "بیف برگر",
  price: 177000,
  image: "/burgers/Beef Burger.webp",
},
{
  id: 6,
  name: "بیکن برگر",
  price: 210000,
  image: "/burgers/Bacon Burger.webp",
},
{
  id: 7,
  name: "پیتزا قفقاز",
  price: 210000,
  image: "/burgers/Caucasian Pizza.webp",
},
{
  id: 8,
  name: "پیتزا یونانی",
  price: 210000,
  image: "/burgers/Greek Pizza.webp",
},
{
  id: 9,
  name: "پیتزا پای گوجه",
  price: 150000,
  image: "/burgers/Tomatoe Pie.webp",
},
{
  id: 10,
  name: "پیتزا امریکن",
  price: 270000,
  image: "/burgers/american pizza.webp",
},


  ];

  return (
    <>
      <div className="title-menu">
        <span>منوی ما</span>
        <h2>!انتخاب کنید و لذت ببرید</h2>
      </div>
      <div className="hamburgermenu-container">
        {products.map((hamburger) => (
          <HamburgerCard
            key={hamburger.id}
            title={hamburger.name}
            price={hamburger.price}
            image={hamburger.image}
          />
        ))}
      </div>
    </>
  );
};

export default HamburgerMenu;
