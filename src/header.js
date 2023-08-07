import image from "./tree.png";

export default function Header() {
  return (
    <header>
      <nav className="nav">
        <img src={image} alt="" width="60px" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}
