import Dice from "../dice";

export default function Board({
  side,
  shaking,
  color,
  handleRoll,
}: {
  side: number;
  shaking: boolean;
  color: string;
  handleRoll: () => void;
}) {
  return (
    <div className="board">
      <div className="dice-container">
        <Dice
          side={side}
          shaking={shaking}
          color={color}
        />
      </div>
    </div>
  );
}
