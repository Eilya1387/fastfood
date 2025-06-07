import HamburgerCard from "./hamburgerCard";
import "../CSS/hamburgerMenu.css";
const HamburgerMenu = () => {
  const products = [
    {
      id: 1,
      name: "چیکن برگر",
      price: "$4.50",
      image: "/burgers/Chicken Burger.webp",
    },
    {
      id: 2,
      name: "فتبوی برگر",
      price: "$3.25",
      image: "/burgers/Fatboy Burger.webp",
    },
    {
      id: 3,
      name: "همبرگر کلاسیک",
      price: "$4.00",
      image: "/burgers/Classic Smash.webp",
    },
    {
      id: 4,
      name: "ناین برگر",
      price: "$5.15",
      image: "/burgers/Burger Nine.webp",
    },
    {
      id: 5,
      name: "بیف برگر",
      price: "$2.95",
      image: "/burgers/Beef Burger.webp",
    },
    {
      id: 6,
      name: "بیکن برگر",
      price: "$3.50",
      image: "/burgers/Bacon Burger.webp",
    },
    {
      id: 7,
      name: "پیتزا قفقاز",
      price: "$3.50",
      image: "/burgers/Caucasian Pizza.png",
    },
    {
      id: 8,
      name: "پیتزا یونانی",
      price: "$3.50",
      image: "/burgers/Greek Pizza.png",
    },
    {
      id: 9,
      name: "پیتزا پای گوجه",
      price: "$2.50",
      image: "/burgers/Tomatoe Pie.png",
    },
    {
      id: 10,
      name: "پیتزا امریکن",
      price: "$4.50",
      image: "/burgers/american pizza.png",
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
