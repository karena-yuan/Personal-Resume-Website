import "./Footer.css";
import linkedinPhoto from "./linkedinPhoto.png";
function Footer() {
  return (
    <div className="footer">
      <a href="https://www.linkedin.com/in/jiaxin-karen-yuan-b850281a2/">
        <img
          src={linkedinPhoto}
          alt="the linkedin image"
          className="LinkedinImage"
        />
      </a>
      <p className="bottomTag">@2023 by Jiaxin Yuan</p>
    </div>
  );
}
export default Footer;
