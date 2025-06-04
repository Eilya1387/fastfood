import "../CSS/hamburgerMenu.css";
const HamburgerCard = ({ price, title, image }) => {
  return (
    <>
      <div className="hamburger-card">
        <img src={image} alt={title} />
        <div className="hamburger-info">
          <h2>{title}</h2>
          <h4>{price}</h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </span>
        </div>

        <button>+</button>
      </div>
    </>
  );
};

export default HamburgerCard;
