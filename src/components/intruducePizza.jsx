import { useEffect } from "react";
import "../CSS/intruducePizza.css"
import pizza1 from "../images/pizza1.webp"
import pizza2 from "../images/pizza2.webp"
import pizza3 from "../images/pizza3.webp"
import pizza4 from "../images/pizza4.webp"
const IntruducePizza = () => {
        useEffect(() => {
        const handleScroll = () => {
            const image = document.querySelector(".pizza-center img");
            if (image) {
                const rotation = window.scrollY % 360;
                image.style.transform = `rotate(${rotation}deg)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return ( 
        <>
        <div className="pizza-container">
            <div className="pizza-titr">
                <h2>پیتزا های ما</h2>
            </div>
            <div className="pizza-center">
                <img src={pizza1} alt="" />
            </div>
            <div className="pizzas">
                <div className="pizza1">
                    <img src={pizza2} alt="" />
                    <h3>مواد تازه</h3>
                    <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                </div>
                <div className="pizza2">
                    <img src={pizza3} alt="" />
                    <h3>موزارلای دست ساز</h3>
                    <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                </div>
                <div className="pizza3">
                    <img src={pizza4} alt="" />
                    <h3>سس مخفی دستور غذا</h3>
                    <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است</span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default IntruducePizza;