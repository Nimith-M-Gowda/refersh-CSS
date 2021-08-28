import React, { useState } from "react";
import Switch from "./Toggle";
import "./mock2.css";
import image from "./cassandra.jpg";
import { BsPerson } from "react-icons/bs";
import { BiSpreadsheet } from "react-icons/bi";
import { CgCreditCard } from "react-icons/cg";
import { GiGamepadCross } from "react-icons/gi";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { AiOutlineShoppingCart, AiFillStar } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";
import { RiLock2Line } from "react-icons/ri";

function Mock2(props) {
  const [value, setValue] = useState(false);
  return (
    <div className="container">
      <div className="sidebar">
        <div className="profile">
          <img className="profile-image" src={image} alt="joe" />
          <div className="profile-name">
            <p>Jonathan W.</p>
            <p className="role">Webflow Dev</p>
          </div>

          <div className="profile-plan">Plan: PERSONAL</div>
        </div>
        <div className="tabs">
          <div className="tabs-profile">
            <p className="icon">
              <BsPerson />
            </p>
            <span className="span">Profile</span>
          </div>
          <div className="tabs-plans">
            <p className="icon">
              <BiSpreadsheet />
            </p>
            <span className="span">Plans</span>
          </div>
          <div className="tabs-billing">
            <p className="icon">
              <CgCreditCard />
            </p>
            <span className="span">Billing</span>
          </div>
          <div className="tabs-integrations">
            <p className="icon">
              <GiGamepadCross />
            </p>
            <span className="span">Integrations</span>
          </div>
          <div className="tabs-tools">
            <p className="icon">
              <FaMoneyCheckAlt />
            </p>
            <span className="span">Billing Tools</span>
          </div>
          <div className="tabs-purchases">
            <p className="icon">
              <AiOutlineShoppingCart />
            </p>
            <span className="span">Purchases</span>
          </div>
          <div className="tabs-email">
            <p className="icon">
              <HiOutlineMail />
            </p>
            <span className="span">Email Settings</span>
          </div>
          <div className="tabs-security">
            <p className="icon">
              <RiLock2Line />
            </p>
            <span className="span">Security</span>
          </div>
        </div>
        <div className="adds">
          <div className="upgrade">
            <p className="adds-icon">
              <AiFillStar />
            </p>
            <span className="adds-span">Upgrade</span>
          </div>
          <div className="public-profile">
            <p className="adds-icon">
              <BsPerson />
            </p>
            <span className="adds-span">Public Profile</span>
          </div>
        </div>
      </div>
      {/* ----------MAIN - SCREEN start */}
      <div className="infotab">
        <div className="infotab-account">
          <h3 className="account-info">Account-Info</h3>
        </div>

        <div className="row1">
          <div className="mid-content">
            <div className="label-input">
              <label className="form-label">First Name</label>
              <input
                className="form-input"
                type="string"
                name="fname"
                value="Jonathan"
              />
            </div>
            <div className="label-input">
              <label className="form-label">Last Name</label>
              <input
                className="form-input"
                type="string"
                name="lname"
                value="Webster"
              />
            </div>
          </div>
          <div className="divider">
            <p>|</p>
          </div>

          <div className="paragraph">
            <p>Displayed on your public profile</p>
            <p>notifications and other places</p>
          </div>
        </div>

        <div className="row2">
          <div className="mid-content">
            <div className="label-input">
              <label className="form-label">UserName</label>
              <input
                className="form-input"
                type="string"
                name="username"
                value="jon-holmes"
              />
            </div>
            <div className="label-input">
              <label className="form-label">Email Address</label>
              <input
                className="form-input"
                type="string"
                name="email"
                value="jon-holmes@gmail.com"
              />
            </div>
          </div>
          <div className="divider">
            <p>|</p>
          </div>

          <div className="paragraph">
            <p>username must be between 3 to 13 characters</p>
            <p>long containing letters and numbers with no</p>
            <p>spaces. Used in public pages like your public</p>
            <p>profile</p>
          </div>
        </div>

        <div className="infotab-profile">
          <h3 className="Profile-info">Profile Info</h3>
        </div>

        <div className="row3">
          <div className="mid-content">
            <div className="label-input">
              <label className="form-label">City</label>
              <input
                className="form-input"
                type="string"
                name="city"
                value="New York"
              />
            </div>
            <div className="label-input">
              <label className="form-label">Country</label>
              <input
                className="form-input"
                type="string"
                name="country"
                value="USA"
              />
            </div>
          </div>
          <div className="divider">|</div>

          <div className="paragraph">
            <p>displayed on your public profile and</p>
            <p>showcase pages.Prospective clients can find you by</p>
            <p>searching your location</p>
          </div>
        </div>

        <div className="row4">
          <div className="mid-content">
            <div className="row4-label-input">
              <label className="form-label">Portfolio</label>
              <input
                className="form-input"
                type="string"
                name="portfolio"
                value="New York"
              />
            </div>
            <div className="availablity-switch">
              <div className="p-tag">
                <p>Available for hire</p>
              </div>
              <div className="switch-tag">
                <Switch isOn={value} handleToggle={() => setValue(!value)} />
              </div>
            </div>
          </div>
          <div className="divider">|</div>
          <div className="paragraph">
            <p>Client and business are able to contact you </p>
            <p>using the contact for your public profile.we'll send</p>
            <p>you an email when someone tries to contact you</p>
          </div>
        </div>

        <div className="row5">
          <div className="mid-content">
            <textarea className="form-input" placeholder="bio" type="string" />
          </div>
          <div className="divider">|</div>
          <div className="paragraph">
            <p>Your short bio will show up on your profile page ,let</p>
            <p>the world know a little about you</p>
          </div>
        </div>

        <div className="row6">
          <div className="mid-content">
            <div className="label-input">
              <label className="form-label">Skills</label>
              <textarea className="form-input" type="string" />
            </div>
          </div>
          <div className="divider">|</div>
          <div className="paragraph">
            <p>Your skills will show up on your profile page</p>
            <p>let people know your top strength</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mock2;
