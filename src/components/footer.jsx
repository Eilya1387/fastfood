import "../CSS/footer.css";
const Footer = () => {
  return (
    <>
<footer>
  <div className="footer-container">
<div className="foot-slide1">
  <h2>شبکه های اجتماعی</h2>
<ul className="social-icons">
  <li><a href="#"><i className="bi bi-instagram"></i></a></li>
  <li><a href="#"><i className="bi bi-whatsapp"></i></a></li>
  <li><a href="#"><i class="bi bi-facebook"></i></a></li>
  <li><a href="#"><i className="bi bi-youtube"></i></a></li>
</ul>

</div>

    <div className="foot-slide2">
      <h2>لینک های سریع</h2>
      <ul>
        <li><a href="#">صفحه اصلی</a></li>
        <li><a href="#">منوی غذا</a></li>
        <li><a href="#">درباره ما</a></li>
        <li><a href="#">تماس با ما</a></li>
      </ul>
    </div>
    <div className="foot-slide3">
      <h2>راه های ارتباطی</h2>
      <ul>
        <li>تماس: 1234567-028</li>
        <li>ایمیل: info@fastfood.com</li>
        <li>آدرس: تهران,میدان میرعماد,روبه روی گل فروشی </li>
      </ul>
    </div>
    <div className="foot-slide4">
      <h2>رستوران ما</h2>
      <span>غذای با کیفیت، طعمی فراموش‌نشدنی و تجربه‌ای لذت‌بخش که همیشه در خاطرتان خواهد ماند!</span>
    </div>
  </div>
  <div className="copyright">
    Copyright © 2025 Fast Food Restaurant (created with ❤️ by Eilya)
  </div>
</footer>

    </>
  );
};

export default Footer;
