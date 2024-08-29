import ColorPickerProps from "../interfaces/ColorPickerProps";
import DiceLogo from "./DiceLogo";

export default function Header({ color, setColor }: ColorPickerProps) {
  function handleColor(e: React.ChangeEvent<HTMLInputElement>) {
    setColor(e.target.value);
    localStorage.setItem("color", e.target.value);
  }

  return (
    <header className="header">
      <div className="logo">
        <DiceLogo />
        <h1>Dice</h1>
      </div>
      <div className="color-picker">
        <label htmlFor="colorPicker">
          <i className="bi bi-palette-fill"></i>
        </label>
        <input
          type="color"
          value={color}
          onChange={(e) => {
            handleColor(e);
          }}
          id="colorPicker"
        ></input>
      </div>
    </header>
  );
}
