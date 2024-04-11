import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <FontAwesomeIcon icon={["fas", `fa-dice-six`]} className="dice-logo" />
        <h1>Dice</h1>
      </div>
    </header>
  );
}

export default Header;
