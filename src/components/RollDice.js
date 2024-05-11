import React, { Component } from "react";
import Die from "./Die";

class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);

    this.state = {
      die1: "one",
      rolling: false,
    };
    this.roll = this.roll.bind(this);
  }

  roll() {
    const { sides } = this.props;

    this.setState({
      die1: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render() {
    const handleBtn = this.state.rolling ? "roll-dice-rolling" : "";
    const { die1, rolling } = this.state;

    return (
      <div className="roll-dice">
        <div className="roll-dice-container">
          <Die face={die1} rolling={rolling} />
        </div>
        <button
          className={handleBtn}
          disabled={this.state.rolling}
          onClick={this.roll}
        >
          {this.state.rolling ? "Rolling..." : "Roll a dice!"}
        </button>
      </div>
    );
  }
}

export default RollDice;
