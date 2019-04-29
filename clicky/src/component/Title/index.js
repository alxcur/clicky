import React from "react";
import "./style.css";

const Title = props => (
  <div className="title">
    <div className="title">Clicky Game{props.children}</div>
    <div className="score">Score: {props.score}</div>
    <div className="highscore">Highscore: {props.highscore}</div>
    
  </div>
);

export default Title;

