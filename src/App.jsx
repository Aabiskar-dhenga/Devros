import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import { Service } from "./Utilis/Service";
import Servicecard from "./Components/Cards/ServiceCard/Servicecard";
import { Course } from "./Utilis/Course";
import Coursecard from "./Components/Cards/CourseCard/Coursecard";
import { Feature } from "./Utilis/Feature";
import Featurecard from "./Components/Cards/FeatureCard/Featurecard";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <div className="appContainer">
      <Navbar />
      <div className="introduction">
        <div className="introductionContent">
          <p className="devrosHeading">
            DEV <span className="span">ROS</span>
          </p>
          <div className="devrosIntroductionParagraph">
            Devros Technologies embarked on its journey with a clear vision - to
            revolutionize the IT industry by providing comprehensive and
            advanced solutions that empower businesses to thrive in the digital
            age. Founded by a group of passionate technologists, the company has
            grown exponentially over the years, expanding its footprint
            globally.
          </div>
          <div className="btnWrapper">
            <button className="codeEditorBtn">Code Editor</button>
            <button className="introductionCourseBtn">Courses</button>
          </div>
        </div>

        <div className="introductionImg">
          {/* img part */}
          <img src="./Animation.png" alt="" />
          <img
            className="logo"
            src="./Logoutilis/onlylogo.png
          "
            alt="logoPng"
          />
        </div>
      </div>
      {/* Service Section Started */}
      <div className="ServiceSection">
        <h1 className="serviceHeader">Service We Provide</h1>
        <div className="servicesWrapper">
          {Service.map((item) => {
            return <Servicecard item={item} />;
          })}
        </div>
      </div>
      {/* ends here */}

      {/* Course section start  */}
      <div className="ServiceSection">
        <h1 className="serviceHeader">Our course</h1>
        <div className="courseWrapper">
          {Course.map((item) => {
            return <Coursecard item={item} />;
          })}
        </div>
      </div>
      {/* course section ends */}

      {/* feature section */}

      <div className="ServiceSection">
        <h1 className="serviceHeader">Our Features</h1>
        <div className="courseWrapper">
          {Feature.map((item) => {
            return <Featurecard item={item} />;
          })}
        </div>
      </div>
      {/* feature section ends  */}

      {/* footer */}
      <Footer />
    </div>
  );
};

export default App;
