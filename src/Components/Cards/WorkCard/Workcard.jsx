import React from "react";
import "./Workcard.css";

const Workcard = () => {
  return (
    <div className="workSection">
      <div className="worksectionUpperpart">
        <h3>Our Works</h3>
        <p>Here are some of our works.</p>
        <button>See More Works</button>
      </div>
      <div className="workCardWrapper">
        <div className="workCard">
          <img src="./Works/Debapi.png" alt="workImg" />
          <p>DebAi</p>
        </div>
        <div className="workCard">
          <img src="./Works/Vrumies.png" alt="workImg" />
          <p>Vrumies</p>
        </div>
      </div>
    </div>
  );
};

export default Workcard;
