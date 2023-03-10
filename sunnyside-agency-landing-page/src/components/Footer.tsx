import Attribution from "./Attribution";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="image-group">
        <img
          src="images/image-gallery-milkbottles.jpg"
          alt="milk bottles"
        ></img>
        <img
          src="images/image-gallery-orange.jpg"
          alt="an orange on a plate"
        ></img>
        <img src="images/image-gallery-cone.jpg" alt="an ice cream cone"></img>
        <img src="images/image-gallery-sugarcubes.jpg" alt="sugar cubes"></img>
      </div>

      <img className="logo" src="images/logo.svg" alt="sunnyside logo"></img>

      <ul className="site-links">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Services</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
      </ul>

      <ul className="social-links">
        <li>
          <a href="#">
            <img src="images/icon-facebook.svg" alt="facebook"></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/icon-instagram.svg" alt="instagram"></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/icon-twitter.svg" alt="twitter"></img>
          </a>
        </li>
        <li>
          <a href="#">
            <img src="images/icon-pinterest.svg" alt="pinterest"></img>
          </a>
        </li>
      </ul>

      <Attribution />
    </footer>
  );
}
