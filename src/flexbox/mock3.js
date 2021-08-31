import React from "react";
import image from "./img/movie1.png";
import music from "./img/itunes.png";
import youtube from "./img/youtube.png";
import netflix from "./img/Netflix.png";
import play from "./img/Google_Play_logo.png";
import amazon from "./img/amvi.png";
import star from "./img/star.png";
import a1 from "./img/ak.png";
import a2 from "./img/dw1.png";
import a3 from "./img/eb.png";
import trailer from "./img/Vector.png";
import "./mock3.css";
import bgimage from "./img/banner.png";

function Mock3(props) {
  return (
    <div className="overlay">
      <img className="bgimage" src={bgimage} />
      <div className="container">
        <div className="container-info">
          <h2 className="title">
            INTO THE BADLANDS <span>(2015 - )</span>
          </h2>

          <p className="genre lighten">Action , Adventure , Drama</p>
          <div className="description">
            <p>
              A mighty warrior and a young boy search for enlightenment in a{" "}
            </p>
            <p>ruthless territory control by feudal barons</p>
          </div>
          <div className="cast">
            <div className="cast-title">
              <h3>Cast</h3>
            </div>
            <div className="cast-description">
              <div className="cast-icons">
                <img src={a2} />
              </div>
              <div className="cast-name">
                <p>Daniel Wu</p>
                <p className="lighten">Sunny</p>
              </div>
              <div className="cast-icons">
                <img src={a3} />
              </div>
              <div className="cast-name">
                <p>Emily Beecham</p>
                <p className="lighten">The Widdow</p>
              </div>
              <div className="cast-icons">
                <img src={a1} />
              </div>
              <div className="cast-name">
                <p>Aramis Knight</p>
                <p className="lighten">M.K</p>
              </div>
              <p className="lighten">See full cast</p>
            </div>
          </div>
          <div className="details">
            <p>
              <span className="lighten">language</span> : English
            </p>
            <p>
              <span className="lighten">Country</span> : USA
            </p>
            <p>
              <span className="lighten">Network</span> : AMC
            </p>
          </div>
          <div className="availability">
            <span>Available on :</span>
            <div className="availability-icons">
              <div className="each-icons">
                <img src={netflix} />
              </div>
              <div className="each-icons">
                <img src={amazon} />
              </div>
              <div className="each-icons">
                <img src={youtube} />
              </div>
              <div className="each-icons">
                <img src={play} />
              </div>
              <div className="each-icons">
                <img src={music} />
              </div>
            </div>
          </div>
          <div>
            <button className="trailer-button">
              <img src={trailer} />
              Watch Trailer
            </button>
          </div>
        </div>
        <div className="container-star">
          <div className="star-icon">
            <img src={star} />
          </div>
          <p className="star-ratings">8.1</p>
        </div>

        <img className="container-image" src={image} />
      </div>
    </div>
  );
}

export default Mock3;
