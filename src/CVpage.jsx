import "./CV.css";
import JiaxinResumeImage from "./JiaxinResumeImage.jpeg";
import resume from "./resume.pdf";
function CVpage() {
  return (
    <main className="CVpage">
      <div className="  ResumeBoxOne">
        <p className="ResumeTitle">CURRICULUM VITAE</p>
      </div>
      <div className="ResumeBoxTwo">
        <img
          className="JiaxinResumeImage"
          src={JiaxinResumeImage}
          alt="jiaxin Yuan's resume"
        />
      </div>
      <div className="ResumeBoxThree">
        <p className="ResumeSubTitle">Click and see the details</p>
      </div>
      <div className="ResumeBoxFour">
        <a href={resume} download="resume.pdf" className="downloadBtn">
          Download
        </a>
      </div>
    </main>
  );
}

export default CVpage;
