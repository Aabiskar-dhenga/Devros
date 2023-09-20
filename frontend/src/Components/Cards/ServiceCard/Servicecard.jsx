import React from "react";
import "./Servicecard.css";

const Servicecard = ({ item }) => {
  return (
    <div className="serviceCard">
      <img src={item.img} className="serviceLogo" alt="serviceImg" />
      <h3 className="serviceTitle">{item.title}</h3>
      <p className="serviceDescription">{item.desc}</p>
      <button className="learnmoreBtn">Learn More</button>
    </div>
  );
};

export default Servicecard;
