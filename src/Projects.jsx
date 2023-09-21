import "./Projects.css";
import catPicTwo from "./catPicTwo.jpg";
import projectImageOne from "./projectImageOne.jpg";
function Projects() {
  return (
    <main className="project">
      <h1 className="project-title">MY PROJECTS</h1>
      <section>
        <div class="card">
          <h3 className="project-name">Animal-Adoption-Program</h3>
          <img className="catPicTwo" src={catPicTwo} alt="a pic with cat" />
          <p className="project-content">
            A Website to Popularize the Knowledge of Adopting Animals
          </p>
          <p>HTML/CSS/JAVASCRIPT</p>
          <p>
            This is a project that aims to facilitate the sharing of animal
            adoption knowledge among people who do not know about adoption, with
            the ultimate goal of improving and encourging more people to adopt
            animals.
          </p>
        </div>
        <div className="card">
          <h3 className="project-nameTwo">Digital-Marketing-Application</h3>
          <img
            className="projectImageOne"
            src={projectImageOne}
            alt="a pic with online shopping"
          />
          <p className="project-contentTwo">
            An Application in Support of Digital Marketing Activities
          </p>
          <p>JAVA</p>
          <p>
            A system help customers to browse and search for products that match
            their needs and wants. It prompts the user for an estimated budget
            and then it will display the corresponding recommendation
            accordingly.
          </p>
        </div>
      </section>
    </main>
  );
}
export default Projects;
