import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Die.css";

class Die extends Component {
  render() {
    const { face, rolling } = this.props;

    return (
      <div>
        <FontAwesomeIcon
          icon={["fas", `fa-dice-${face}`]}
          className={`die ${rolling && "die-shaking"}`}
        />
      </div>
    );
  }
}

export default Die;
