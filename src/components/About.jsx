import React from "react";
import "./About.css";
import beach1 from "../assets/beach1.png";
import beach2 from "../assets/beach2.png";

function About  () {
  return (
    <div className="beach-banner">
        <div className="images">
 <div className="image1">
        <img src={beach1} alt="Beach 1" className="beach-img1" />
      </div>
      <div className="image2">
        <img src={beach2} alt="Beach 2" className="beach-img2" />
      </div>
        </div>
     
      <div className="text-content">
        <h2>
          More information <br /> about the best beachs
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam,
          purus sit amet luctus venenatis, lectus magna fringilla urna,
          otestate. Quae omnia in nostra sententia, pursuit
        </p>
        <button className="explore-btn">Explore Now</button>
      </div>
    </div>
  );
};

export default About;
