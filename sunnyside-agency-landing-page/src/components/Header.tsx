export default function Header() {
  return (
    <header className="header">
      <h1>We Are Creatives</h1>

      <nav>
        <img className="logo" src="images/logo.svg" alt="logo"></img>
        <img className="hamburger" src="images/icon-hamburger.svg" alt=""></img>
        <ul>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li className="contact">
            <a>Contact</a>
          </li>
        </ul>
      </nav>

      <img className="arrow" src="images/icon-arrow-down.svg" alt=""></img>
    </header>
  );
}
