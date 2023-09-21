import { useRef } from "react";
import "./Header.css";
import JX from "./JX.jpeg";
import linkedinPhoto from "./linkedinPhoto.png";
import { useState } from "react";

function Header({
  setPage,
  navigateHome,
  navigateProjects,
  navigateAboutMe,
  navigateCVpage,
}) {
  const [currentMenu, setMenu] = useState(false);
  function buttonHandler() {
    setMenu((current) => !current);
    console.log(currentMenu);
  }

  return (
    <header className="header">
      <a href="#main" className="skip">
        Skip to main content
      </a>
      <div className="NavBar">
        <button className="NavBtn" onClick={navigateHome}>
          Home
        </button>
        <button className="NavBtn" onClick={navigateProjects}>
          Projects
        </button>
        <div className="DropDownMenu">
          <button className="NavBtn" onClick={buttonHandler}>
            More
          </button>
          <div className={`subMenu ${currentMenu ? "showSubMenu" : ""}`}>
            <button onClick={navigateAboutMe}>About Me</button>
            <button onClick={navigateCVpage}>CV</button>
          </div>
        </div>

        <button className="NavBtn">jiaxin.career@gmail.com</button>
        <button className="NavBtn">646-689-0931</button>
        <a href="https://www.linkedin.com/in/jiaxin-karen-yuan-b850281a2/">
          <img
            src={linkedinPhoto}
            alt="the linkedin image"
            className="header-linedinImage"
          />
        </a>
      </div>
      <img className="JXimage" src={JX} alt="name image" />
      <h3 className="header-pic">JIAXIN YUAN</h3>
    </header>
  );
}
export default Header;
