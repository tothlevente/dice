import Dice from "../dice";

import { Button } from "../ui/button";

export default function Board({
  side,
  rolling,
  color,
  handleRoll,
}: {
  side: number;
  rolling: boolean;
  color: string;
  handleRoll: () => void;
}) {
  return (
    <div className="board">
      <div className="dice-container">
        <Dice
          side={side}
          rolling={rolling}
          color={color}
        />
        <div className="button-container">
          {rolling ? (
            <Button disabled>Rolling...</Button>
          ) : (
            <Button onClick={() => handleRoll()}>Roll a dice!</Button>
          )}
        </div>
      </div>
    </div>
  );
}
