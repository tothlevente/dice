import Dice1 from "../../assets/icons/dice-1";
import Dice2 from "../../assets/icons/dice-2";
import Dice3 from "../../assets/icons/dice-3";
import Dice4 from "../../assets/icons/dice-4";
import Dice5 from "../../assets/icons/dice-5";
import Dice6 from "../../assets/icons/dice-6";

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
