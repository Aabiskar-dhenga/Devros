import React from "react";
import "./About.css";
import Navbar from "../../Components/Navbar/Navbar";

const About = () => {
  return (
    <div className="aboutusContainer">
      <Navbar />
      <div className="aboutTopbar">
        <h1 className="aboutHeading">Get to know us</h1>
        <p className="headingPtag">
          IT services from our company include technology and business experts
          who manage all kinds of business processes.
        </p>
        <button className="chatwithusBtn">Chat with Us</button>
      </div>
      <div className="aboutusWrapper">
        <h1>About us</h1>
        <div>
          <p className="aboutusDesc">
            Devros Technologies is a dynamic IT company that excels in
            delivering a wide array of services tailored to meet the modern
            business landscape's evolving demands. Founded in 2023, Devros has
            consistently proven its proficiency in web development, training,
            and UI/UX design, earning a distinguished reputation for excellence
            in the industry.
          </p>
          <img src="./us/guys.png" alt="santoshAndRajivImg" />
        </div>
      </div>
    </div>
  );
};

export default About;
