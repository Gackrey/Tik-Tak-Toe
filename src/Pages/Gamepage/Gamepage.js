import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import { Board } from "../../Components/Board";
import { calculateWinner } from "../../Utils/calculateScore";
import "./gamepage.css";
export const Gamepage = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const xOrO = new URLSearchParams(useLocation().search).get("chosen");
  const [xIsNext, setXisNext] = useState(xOrO === "X" ? true : false);
  const winner = calculateWinner(history[stepNumber]);
  const [scoreAlex, setScoreAlex] = useState(0);
  const [scoreMark, setScoreMark] = useState(0);
  useEffect(() => {
    if (winner) {
      setHistory([Array(9).fill(null)]);
      setStepNumber(0);
      setXisNext(!xIsNext);
      if ((xOrO === "X" && winner === "X") || (xOrO === "O" && winner === "O"))
        setScoreAlex((curr) => curr + 1);
      else setScoreMark((curr) => curr + 1);
    }
  }, [winner]);
  const xO = xIsNext ? "X" : "O";
  const clickHandler = (i) => {
    const historyPoint = history.slice(0, stepNumber + 1);
    const current = historyPoint[stepNumber];
    const squares = [...current];
    if (winner || squares[i]) return;
    squares[i] = xO;
    setHistory([...historyPoint, squares]);
    setStepNumber(historyPoint.length);
    setXisNext(!xIsNext);
  };
  return (
    <div className="gamepage">
      <div className="gamers">
        <h2>Alex</h2>
        <div className="score-board">
          {scoreAlex} - {scoreMark}
        </div>
        <h2>Mark</h2>
      </div>
      <div className="board-container">
        <div className="board-border-box">
          <Board squares={history[stepNumber]} onSquareClick={clickHandler} />
        </div>
      </div>
      <button className="settings">
        <i className="fas fa-cog set-ico"></i>
      </button>
    </div>
  );
};
