import { MouseEventHandler } from "react";

export default interface DiceRollingProps {
  dice: number;
  rolling: boolean;
  color: string;
  handleRoll: MouseEventHandler<HTMLButtonElement>;
}
