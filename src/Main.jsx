import Home from "./Home";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import CVpage from "./CVpage";
function Main({ currentPage }) {
  return (
    <main>
      {currentPage === "Home" && <Home></Home>}
      {currentPage === "Projects" && <Projects></Projects>}
      {currentPage === "AboutMe" && <AboutMe></AboutMe>}
      {currentPage === "CVpage" && <CVpage></CVpage>}
    </main>
  );
}
export default Main;
