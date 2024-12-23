import DiceProps from "@/interfaces/DiceProps";

import Dice1 from "./icons/dice-1";
import Dice2 from "./icons/dice-2";
import Dice3 from "./icons/dice-3";
import Dice4 from "./icons/dice-4";
import Dice5 from "./icons/dice-5";
import Dice6 from "./icons/dice-6";

export default function Dice({ side, color, rolling }: DiceProps) {
  const width = 200;
  const height = 200;

  function renderSwitch(index: number) {
    switch (index) {
      case 1:
        return (
          <Dice1
            width={width}
            height={height}
          />
        );
      case 2:
        return (
          <Dice2
            width={width}
            height={height}
          />
        );
      case 3:
        return (
          <Dice3
            width={width}
            height={height}
          />
        );
      case 4:
        return (
          <Dice4
            width={width}
            height={height}
          />
        );
      case 5:
        return (
          <Dice5
            width={width}
            height={height}
          />
        );
      case 6:
        return (
          <Dice6
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
