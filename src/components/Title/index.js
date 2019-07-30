import React from "react";
import "./style.css";

function Title(props) {
  return (
    <div className="jumbotron jumbotron-fluid text-center">
      <div className="container">
        <h1 className="display-4">{props.children}</h1>
        <p className="lead">Current Score: </p>
        <p className="lead">High Score: </p>
      </div>
    </div>

  );
}

export default Title;
