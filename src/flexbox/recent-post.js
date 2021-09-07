import React from "react";
import life from "./images/life.jpg";
import food from "./images/food.jpg";
import work from "./images/work.jpg";
import deco from "./images/deco.jpg";
import me from "./images/about-me.jpg";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Routes } from "../approuter";
import "./recent-post.css";

function RecentPage(props) {
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
          <li>
            <Link to={`${Routes.aboutpage}`}>About Me</Link>
          </li>
          <li className="current-page">
            <Link to={`${Routes.recentpage}`}>Recent Posts</Link>
          </li>
        </div>
      </div>
      <div className="content">
        <div className="main">
          <div className="story-old">
            <div className="stories">
              <div className="profile-photo">
                <img src={life} />
                <p>July 23, 2019 | 3 comments</p>
              </div>
              <div className="profile-description">
                <h2>Finding simplicity in life</h2>
                <p>
                  <span className="highlight">
                    Life can get complicated really quickly
                  </span>
                  , but it doesn't have to be! There are many ways to simplify
                  your life,{" "}
                  <span className="link">
                    <a>a few of which we've explored in the past</a>
                  </span>
                  . This week we're taking a bit of a approach though, in how
                  you can find simplicity in the life you already living.
                </p>
                <h4>continue reading</h4>
              </div>
            </div>
            <div className="stories">
              <div className="profile-photo">
                <img src={food} />
                <p>July 19, 2019 | 3 comments</p>
              </div>
              <div className="profile-description">
                <h2>Keeping cooking simple</h2>
                <p>
                  Food is a very important part of everyone's life. If you want
                  to be healthy, you have to eat healthy. One of the easiest
                  ways to do that is to keep your cooking nice and simple.
                </p>
                <h4>continue reading</h4>
              </div>
            </div>
            <div className="stories">
              <div className="profile-photo">
                <img src={work} />
                <p>July 12, 2019 | 3 comments</p>
              </div>
              <div className="profile-description">
                <h2>Simplicity and work</h2>
                <p>
                  Work is often a major source of stress. People get frustrated,
                  it ruins their relationship with others and it leads to
                  burnout. By keeping your work life as simple as possible, it
                  will help balance everything out.
                </p>
                <h4>continue reading</h4>
              </div>
            </div>
            <div className="stories">
              <div className="profile-photo">
                <img src={deco} />
                <p>July 3, 2019 | 3 comments</p>
              </div>
              <div className="profile-description">
                <h2>Simple decorations</h2>
                <p>
                  A home isn't a home until you've decorated a little. People
                  either don't decorate, or they go overboard and it doesn't
                  have the impact they were hoping for. Staying simple will help
                  draw the eye where you want it to and make things pop like
                  never before.
                </p>
                <h4>continue reading</h4>
              </div>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <div className="sidebar-1">
            <h3>About me</h3>
            <div className="sidebar-profile">
              <img src={me} />
              <h6>
                I find life better, and I'm happier, when things are nice and
                simple.
              </h6>
            </div>
          </div>
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

export default RecentPage;
