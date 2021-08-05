import React from "react";
import { Square } from "./Square";
import "./game.css"
export const Board = ({ squares, onSquareClick }) => {
  return (
    <div className="board">
      {squares.map((sqr, i) => (
        <Square key={i} value={sqr} onButtonClick={() => onSquareClick(i)} />
      ))}
    </div>
  );
};
