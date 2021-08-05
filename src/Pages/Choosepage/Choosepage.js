import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Crossicon, Circleicon } from "../../Components";
import "./choosepage.css";
export const Choosepage = () => {
  const navigate = useNavigate();
  const [chosenSym, setChosenSym] = useState("");
  function moveToGame(e) {
    e.preventDefault();
    if (chosenSym !== "") navigate(`/game?chosen=${chosenSym}`);
  }
  return (
    <div className="choose-page">
      <p>Pick your side</p>
      <div className="choose-box">
        <label style={{ opacity: chosenSym === "X" ? 1 : 0.3 }}>
          <Crossicon />
          <input
            type="radio"
            value="cross"
            name="symbol"
            onChange={() => setChosenSym("X")}
          />
        </label>
        <label style={{ opacity: chosenSym === "O" ? 1 : 0.3 }}>
          <Circleicon />
          <input
            type="radio"
            value="circle"
            name="symbol"
            onChange={() => setChosenSym("O")}
          />
        </label>
      </div>
      <button className="continue" onClick={(e) => moveToGame(e)}>
        Continue
      </button>
    </div>
  );
};
