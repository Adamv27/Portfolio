import { useState } from "react";
import menuIcon from "../assets/menu-icon.svg";
import closeIcon from "../assets/close-icon.svg"

const NavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (

    <div id="nav-menu">
      <img
        src={menuIcon}
        className={`nav-menu-icon ${isOpen ? "hide" : "show"}`}
        onClick={() => setIsOpen(!isOpen)}
      />
      <img
        src={closeIcon}
        className={`nav-menu-icon ${isOpen ? "show" : "hide"}`}
        onClick={() => setIsOpen(!isOpen)}
      />
    </div>
  );
}

export default NavMenu;