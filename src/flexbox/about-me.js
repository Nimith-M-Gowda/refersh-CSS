import React from "react";
import life from "./images/life.jpg";
import food from "./images/food.jpg";
import work from "./images/work.jpg";
import deco from "./images/deco.jpg";
import me from "./images/about-me.jpg";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Routes } from "../approuter";
import "./about-me.css";

function AboutMe(props) {
  return (
    <div className="container">
      <div className="navbar">
        <div className="header">
          <h1>Living the simple life</h1>
          <h4>A blog exploring minimalism in life</h4>
        </div>
        <div className="options">
          <li>
            <Link to={`${Routes.homepage}`}>Home</Link>
          </li>
          <li className="current-page">
            <Link to={`${Routes.aboutpage}`}>About Me</Link>
          </li>
          <li>
            <Link to={`${Routes.recentpage}`}>Recent Posts</Link>
          </li>
        </div>
      </div>
      <div className="content">
        <div className="main">
          <div className="story-recent">
            <div className="profile-photo">
              <img src={me} />
            </div>
            <div className="profile-description">
              <h2>My name is John and living the simple life saved my life</h2>
              <p>
                <strong>I used to be a pack rat</strong>. I had so many things
                that I thought that I loved, but the truth was I couldn't even
                appreciate any of it because there was too much.
              </p>
              <p>
                Things were terrible. I had a job that I hated, a home that I
                didn't want to live in, and I couldn't hold a relationship.
              </p>
              <h3>How I turned things around</h3>
              <p>
                <strong>
                  I was on the verge of a breakdown when I got rid of everything
                </strong>
                . I literally put 90% of my possessions in the garbage, sold my
                place and moved into a smaller apartment, and I quit my job.
              </p>
              <p>
                It wasn't easy at all, but everything around me was in such a
                bad place, I didn't know what else to do. And it worked.
              </p>
              <h3>Now I live the simple life</h3>
              <p>
                Now that I'm living a simple life, things are so much better.
                I'm less stressed, enjoy life and work more, and I have more
                free time to enjoy.
              </p>
              <p>
                With how much it turned my life around,{" "}
                <strong>
                  I felt like I had no choice but to start sharing how I did it
                </strong>
                , and how others can benefit from living a simple life as well,
                which is why I started this site!
              </p>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-2">
            <h3>Recent posts</h3>
            <div className="sidebar-profile">
              <img src={food} />
              <h5>Keeping cooking simple</h5>
            </div>
            <div className="sidebar-profile">
              <img src={work} />
              <h5>Simplicity and work</h5>
            </div>
            <div className="sidebar-profile">
              <img src={deco} />
              <h5 className="last-ele">Simple decorations</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <h3>Living the simple Life</h3>
        <h5>Copyright 2021</h5>
      </div>
    </div>
  );
}

export default AboutMe;
