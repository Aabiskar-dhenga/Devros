import React from "react";
import "./Coursecard.css";

const Coursecard = ({ item }) => {
  return (
    <div className="courseCard">
      <img src={item.img} className="courseImg" alt="courseImg" />
      <p>{item.title}</p>
    </div>
  );
};

export default Coursecard;
