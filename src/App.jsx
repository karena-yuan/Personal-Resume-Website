import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import React from "react";
import { useState } from "react";

function App() {
  const [currentPage, setPage] = useState("Home");
  function navigateHome() {
    setPage(() => {
      return "Home";
    });
  }

  function navigateProjects() {
    setPage(() => {
      return "Projects";
    });
  }

  function navigateAboutMe() {
    setPage(() => {
      return "AboutMe";
    });
  }
  function navigateCVpage() {
    setPage(() => {
      return "CVpage";
    });
  }
  return (
    <div className="App">
      <Header
        setPage={setPage}
        navigateHome={navigateHome}
        navigateProjects={navigateProjects}
        navigateAboutMe={navigateAboutMe}
        navigateCVpage={navigateCVpage}
      ></Header>
      <Main currentPage={currentPage}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
