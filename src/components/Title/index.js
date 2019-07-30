import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">{props.title}</h1>
        <p className="lead">Current Score: {props.score}</p>
        <p className="lead">High Score: {props.highScore}</p>
        <p>{props.message}</p>
      </div>
    </div>

  );
}

export default Title;
