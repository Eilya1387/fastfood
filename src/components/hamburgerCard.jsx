const HamburgerCard = ({ price, title, image }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat("fa-IR").format(price);
  };

  const addToCart = () => {
    const product = {
      title,
      price,
      image,
      quantity: 1,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex((item) => item.title === title);

    if (existingIndex >= 0) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <>
      <div className="hamburger-card">
        <img src={image} alt={title} />
        <div className="hamburger-info">
          <h2>{title}</h2>
          <h4 dir="rtl">{formatPrice(price)} تومان </h4>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod
          </span>
        </div>
        <button onClick={addToCart}>+</button>
      </div>
    </>
  );
};

export default HamburgerCard;
