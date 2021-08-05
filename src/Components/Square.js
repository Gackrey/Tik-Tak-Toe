import React from "react";
import { Crossicon, Circleicon } from "./index";
import "./game.css";
export const Square = ({ value, onButtonClick }) => {
  return (
    <button className="btn-XO" onClick={onButtonClick}>
      {value === "X" ? <Crossicon /> : value === "O" ? <Circleicon /> : " "}
    </button>
  );
};
