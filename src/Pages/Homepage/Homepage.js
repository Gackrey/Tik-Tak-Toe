import React from "react";
import { useNavigate } from "react-router-dom";
import { Circleicon, Crossicon } from "../../Components";
import "./homepage.css";
export const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="container-homepage">
      <div className="homepage-body">
        <div className="symbols">
          <Crossicon />
          <Circleicon />
        </div>
        <p className="text">Choose your play mode</p>
        <div className="div-btns">
          <button className="btn btn-blue">WITH AI</button>
          <button className="btn" onClick={() => navigate("/choose")}>
            WITH A FRIEND
          </button>
        </div>
        <button className="settings">
          <i className="fas fa-cog set-ico"></i>
        </button>
      </div>
    </div>
  );
};
