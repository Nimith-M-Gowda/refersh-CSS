import React from "react";
import img1 from "./jacob.png";
import img2 from "./john.jpeg";
import img3 from "./kim.jpeg";
import "./Practice.css";

function Practice(props) {
  return (
    <div className="container">
      <img className="img" src={img1} slt="jacob" />
      <div className="subject">
        <h3>Kylian Mbappe</h3>
        <div className="description">
          <p>this is a content on kylian mbappe</p>
          <p>from monaco to psg along with neymar playing now with messi </p>
        </div>
        <div className="comment-box1">
          <img src={img2} alt="john" />
          <div className="cd1">
            <h5>name1</h5>
            <p>comment one on kylian mbappe</p>
          </div>
        </div>
        <div className="comment-box2">
          <img src={img3} alt="kim" />
          <div className="cd2">
            <h5>name1</h5>
            <p>comment two on kylian mbappe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Practice;

{
  /* <div class="container">
      <div className="header">header</div>
      <div className="row">
        <div className="nav">navigation</div>
        <div className="main">mainSection</div>
        <div className="aside">aside</div>
      </div>
      <div className="footer">footer</div>
    </div> */
}
