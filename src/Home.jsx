import "./Home.css";
import bottomLinkedin from "./bottomLinkedin.png";
import { useState } from "react";
function Home() {
  function EmailChange(event) {
    let x = event.target.value;
    if (!x.includes("@") || x === "") {
      document.getElementById("emailError").innerText =
        "Please enter a valid email address";
    } else {
      document.getElementById("emailError").innerText = "";
    }
  }
  function NameChange(event) {
    let y = event.target.value;
    if (y === "") {
      document.getElementById("nameError").innerText =
        "Please enter a valid name";
    } else {
      document.getElementById("nameError").innerText = "";
    }
  }
  function PhoneChange(event) {
    let z = event.target.value;
    if (z.length < 10) {
      document.getElementById("phoneError").innerText =
        "Phone no more than 10 char";
    } else {
      document.getElementById("phoneError").innerText = "";
    }
  }
  function MessageChange(event) {
    let t = event.target.value;
    if (t === "") {
      document.getElementById("messageError").innerText =
        "Please fill out this field";
    } else {
      document.getElementById("messageError").innerText = "";
    }
  }

  const [showOtherOption, setOtherOption] = useState(false);

  function toggleOptions(event) {
    if (event.target.value === "other") {
      setOtherOption(() => {
        return true;
      });
    } else {
      setOtherOption(() => {
        return false;
      });
    }
  }

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    console.log(event);
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;
    const phone = event.target.phone.value;
    const select = event.target.select.value;
    const otherSubject = event.target.otherSubject?.value;

    if (name === "" || email === "" || message === "") {
      document.getElementById("nameError").innerText =
        "Please enter a valid name";
      document.getElementById("emailError").innerText =
        "Please enter a valid email address";
      document.getElementById("messageError").innerText =
        "Please fill out this field";
      setFormSubmitted(false);
    } else {
      const formData = {
        name,
        email,
        message,
        phone,
        subject: select !== "other" ? select : otherSubject,
      };
      setFormSubmitted(true);
    }
  };

  return (
    <main className="home">
      <div className="homeTitleBox">
        <h1 className="header-title">
          WELCOME TO MY <br></br>PORTFOLIO <br></br> &CV
        </h1>
        <p className="IntroOne">
          M.S. in Computer Software Engineering, NEU-SV
        </p>{" "}
        <p className="IntroTwo">
          Seeking for SDE intern position starting from 2024
        </p>
      </div>
      <div className="coverStatementBox">
        <h2 className="coverStatement">COVER STATEMENT</h2>
        <p className="coverContentOne">
          Enthusiastic and dedicated, I'm seeking a position where I can grow,
          develop and make an inmpact.
        </p>
        <p className="coverContentTwo">
          With a strong skill set and experience in computer science and
          software engineering,
        </p>
        <p className="coverContentThree">
          I believe I can bring creative ideas and different solutions to the
          table.
        </p>
      </div>
      <div className="ContactInfoBox">
        <div className="contactInfo">
          <h2 className="ConnectText">LET'S CONNECT</h2>
          <p className="MoreInfo">
            Don't hesitate to reach out with the contact information below, or
            send a message using the form.
          </p>
          <p className="ConnectTextOne">jiaxin.career@gmail.com</p>
          <p className="ConnectTextTwo">646-689-3213</p>
          <a href="https://www.linkedin.com/in/jiaxin-karen-yuan-b850281a2/">
            <img
              src={bottomLinkedin}
              alt="the bottom linkedin image"
              className="bottom-linedinImage"
            />
          </a>
        </div>
        <div className="formBox">
          {formSubmitted ? (
            <div className="demoForm">
              <p className="response">Thank you for submitting the form!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="demoForm">
              <div className="container">
                <div className="box1">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="name"
                    name="name"
                    onChange={NameChange}
                  />
                  <p id="nameError"></p>
                </div>
                <div className="box2">
                  <label htmlFor="email">Email</label>
                  <input
                    type="text"
                    className="email"
                    name="email"
                    onChange={EmailChange}
                  />
                  <p id="emailError"></p>
                </div>
                <div className="box3">
                  <label htmlFor="phone">Phone</label>
                  <input
                    type="text"
                    className="phone"
                    name="phone"
                    onChange={PhoneChange}
                  />
                  <p id="phoneError"></p>
                </div>
                <div className="box4">
                  <label htmlFor="message">Message</label>
                  <input
                    type="message"
                    className="message"
                    name="message"
                    onChange={MessageChange}
                  />
                  <p id="messageError"></p>
                </div>
                <div>
                  <label htmlFor="select">Subject</label>
                  <select id="select" name="select" onChange={toggleOptions}>
                    <option value="job-opportunities">Job Opportunities</option>
                    <option value="collaborate">Lets Collaborate!</option>
                    <option value="other">Other</option>
                  </select>
                  {showOtherOption && (
                    <div>
                      <label htmlFor="otherSubject">Enter your subject:</label>
                      <input
                        id="otherSubject"
                        name="otherSubject"
                        type="text"
                      />
                    </div>
                  )}
                </div>
                <button type="submit" className="submit">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
}
export default Home;
