import { Component, ReactNode } from "react";

import Dice from "./Dice";
import DiceProps from "../interfaces/DiceProps";
import SidesProps from "../interfaces/SidesProps";

export default class DiceRoll extends Component<SidesProps, DiceProps> {
  static defaultProps = {
    sides: [1, 2, 3, 4, 5, 6],
  };

  constructor(props: SidesProps) {
    super(props);

    this.state = {
      dice: 1,
      color: "black",
      rolling: false,
    };

    this.roll = this.roll.bind(this);
  }

  roll() {
    const { sides }: SidesProps = this.props;

    this.setState({
      dice: sides[Math.floor(Math.random() * sides.length)],
      rolling: true,
    });

    setTimeout(() => {
      this.setState({ rolling: false });
    }, 1000);
  }

  render(): ReactNode {
    const handleBtn = this.state.rolling ? "roll-dice-rolling" : "";
    const { dice, color, rolling } = this.state;

    return (
      <div className="roll-dice">
        <div className="roll-dice-container">
          <Dice dice={dice} color={color} rolling={rolling} />
        </div>
        <button className={handleBtn} disabled={this.state.rolling} onClick={this.roll}>
          {this.state.rolling ? (
            <span className="rolling-button-text">Rolling...</span>
          ) : (
            <span className="rolling-button-text">Roll a dice!</span>
          )}
        </button>
      </div>
    );
  }
}
