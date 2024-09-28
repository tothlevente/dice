import DiceRollingProps from "../interfaces/DiceRollingProps";
import Dice from "./Dice";

import { grey } from "@mui/material/colors";

export default function DiceRolling({
  dice,
  rolling,
  color,
  handleRoll,
}: DiceRollingProps) {
  return (
    <div className="roll-dice">
      <div className="roll-dice-container">
        <Dice dice={dice} color={color} rolling={rolling} />
      </div>
      <button
        style={{ backgroundColor: grey[900] }}
        className={rolling ? "roll-dice-rolling" : ""}
        disabled={rolling}
        onClick={handleRoll}
      >
        {rolling ? (
          <span className="rolling-button-text">Rolling...</span>
        ) : (
          <span className="rolling-button-text">Roll a dice!</span>
        )}
      </button>
    </div>
  );
}
