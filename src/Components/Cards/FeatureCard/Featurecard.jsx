import React from "react";
import "./Featurecard.css";

const Featurecard = ({ item }) => {
  return (
    <div className="featureCard">
      <img src={item.img} className="featureImg" alt="featureImg" />
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
};

export default Featurecard;
