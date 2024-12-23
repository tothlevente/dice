import { Dice1, Dice2, Dice3, Dice4, Dice5, Dice6 } from "./render-dice";

import DiceProps from "@/interfaces/DiceProps";

export default function Dice({
  side,
  color,
  rolling,
  variant,
}: DiceProps) {
  const width = 200;
  const height = 200;

  function renderSwitch(index: number) {
    switch (index) {
      case 1:
        return (
          <Dice1
            variant={variant}
            width={width}
            height={height}
          />
        );
      case 2:
        return (
          <Dice2
            variant={variant}
            width={width}
            height={height}
          />
        );
      case 3:
        return (
          <Dice3
            variant={variant}
            width={width}
            height={height}
          />
        );
      case 4:
        return (
          <Dice4
            variant={variant}
            width={width}
            height={height}
          />
        );
      case 5:
        return (
          <Dice5
            variant={variant}
            width={width}
            height={height}
          />
        );
      case 6:
        return (
          <Dice6
            variant={variant}
            width={width}
            height={height}
          />
        );
    }
  }

  return (
    <div
      style={{ color: color }}
      className={`"dice" ${rolling && "rolling"}`}
    >
      {renderSwitch(side)}
    </div>
  );
}
