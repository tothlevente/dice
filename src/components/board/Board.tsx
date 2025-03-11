import { Button } from "../ui/button";
import { Variant } from "@/App";

import Dice from "./Dice";

interface Props {
  side: number;
  rolling: boolean;
  color: string;
  variant: Variant;
  handleRoll: () => void;
}

export default function Board({
  side,
  rolling,
  color,
  variant,
  handleRoll,
}: Props) {
  return (
    <div className="board">
      <div className="dice-container">
        <Dice
          side={side}
          rolling={rolling}
          color={color}
          variant={variant}
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
