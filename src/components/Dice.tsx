import DiceProps from "../interfaces/DiceProps";

export default function Dice({ dice, color, rolling }: DiceProps) {
  return (
    <i
      style={{ color: color }}
      className={[`bi bi-dice-${dice}-fill dice ${rolling && "dice-shaking"}`].join()}
    ></i>
  );
}
