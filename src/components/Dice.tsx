import { Component, ReactNode } from "react";
import DiceProps from "../interfaces/DiceProps";

export default class Dice extends Component<DiceProps> {
  render(): ReactNode {
    const { dice, rolling } = this.props;

    return <i className={[`bi bi-dice-${dice}-fill dice ${rolling && "dice-shaking"}`].join()}></i>;
  }
}
