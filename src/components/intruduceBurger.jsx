import "../CSS/intruduceBurger.css"
import burger3 from "../images/burger3.webp"
const IntruduceBurger = () => {
    return ( 
        <>
        <div className="intruduce-container">
<div className="title-burger"><h3>پخته شده با مواد طبیعی</h3></div>
<div className="des-burger">
    <div className="intru1">
        <div>
            <h2>نان تازه</h2>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
        </div>
        <div>
            <h2>برگ کاهو</h2>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
        </div>
        <div>
            <h2>پیاز ارگانیک</h2>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
        </div>
    </div>
    <div className="burger">
        <img src={burger3} alt="" />
    </div>
    <div className="intru2">
              <div>
            <h2>پنیر درخشان</h2>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
        </div>
        <div>
            <h2>گوشت با کیفیت</h2>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
        </div>
        <div>
            <h2>بیکن خانگی</h2>
            <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</span>
        </div>  
    </div>
</div>
        </div>
        </>
     );
}
 
export default IntruduceBurger;