import imageOne from "./ImageOne.jpeg";
import imageTwo from "./ImageTwo.jpeg";
import imageThree from "./ImageThree.jpeg";
import "./AboutMe.css";
import profileImage from "./profile.jpeg";
import { useState } from "react";
function AboutMe() {
  const [activeCard, setActiveCard] = useState(null);
  const [currentIndex, upstateIndex] = useState(0);
  function IncreaseIndex() {
    upstateIndex(() => {
      console.log("+1");
      return currentIndex + 1;
    });
  }
  function DecreaseIndex() {
    upstateIndex(() => {
      console.log("-1");
      return currentIndex - 1;
    });
  }

  window.addEventListener("click", function (event) {
    if (
      this?.document?.getElementById("accordion") &&
      !this?.document?.getElementById("accordion").contains(event.target)
    ) {
      setActiveCard(-1);
    }
  });

  const data = [
    {
      title: "Master's Degree",
      school: "NORTHEASTERN UNIVERSITY SILICON VALLEY",
      date: "September 2022- April 2023",
      program: "Master of Science in Computer Software Engineering",
    },
    {
      title: "Undergraduate Degree",
      school: "Xi'an International Studies University",
      date: "September 2017- June 2021",
      program: "Bachelor of Art in English Language and Literature",
    },
  ];

  const CarouselData = [imageOne, imageTwo, imageThree];

  return (
    <main className="more">
      <h1 className="more-header">Education</h1>
      <p className="more-intro">What I've Learned</p>
      <section>
        <div className="CardMore">
          <img
            className="profileImage"
            src={profileImage}
            alt="my profile pic"
          />
          <p className="MyprofileText">jiaxin.career@gmail.com</p>
          <a href="https://github.com/Karen-yuan" className="MyprofileText">
            https://github.com/Karen-yuan
          </a>
          <p className="MyprofileSkills">Skills</p>
          <p className="MyprofileText"> Python Java Javascript </p>
          <p className="MyprofileText">HTML CSS Full-Stack Engineer</p>
          <p className="MyhobbyText">My Hobbies:</p>
          <p className="MyhobbyText">Swimming, Watching Movie, Travel </p>

          <div id="accordion">
            {data.map((section, index) => (
              <div key={index}>
                <button
                  className="accordion-btn"
                  onClick={() => setActiveCard(index)}
                >
                  {section.title}
                </button>
                <div
                  className={`${
                    activeCard === index ? "activeCard" : "disableCard"
                  }`}
                >
                  <p className="MyschoolTest">{section.school}</p>
                  <p className="MyschoolTextContent">{section.date}</p>
                  <p className="MyschoolTextContent"> {section.program}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="TravelText">Traveling Pictures:</p>
        </div>
      </section>

      <section className="carousel">
        {CarouselData.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`carouselImg ${
              //the dollar sign bracket help me to realize the javascript in he html
              //``apostrophy let me to have the javascript
              index === currentIndex ? "activeImg" : "" //i am basically saying if the index match with the currentstate, the let me toggle the class activeImg,wich display the block for me
            }`}
          ></img>
        ))}{" "}
        <button className="carousel-btn" onClick={() => DecreaseIndex()}>
          Prev
        </button>
        <button className="carousel-btn" onClick={() => IncreaseIndex()}>
          Next
        </button>
      </section>
    </main>
  );
}

export default AboutMe;
