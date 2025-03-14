import { ThemeProvider } from "./components/themes/ThemeProvider";
import { useEffect, useState } from "react";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Board from "./components/board/Board";

export type Variant = "outline" | "filled";

export default function App() {
  const [rollingDice, setRollingDice] = useState(false);
  const [diceVariant, setDiceVariant] = useState<Variant>(
    () => (localStorage.getItem("dice-variant") as Variant) || "outline"
  );
  const [diceColor, setDiceColor] = useState(
    () => (localStorage.getItem("dice-color") as string) || ""
  );
  const [diceSide, setDiceSide] = useState(1);

  useEffect(() => {
    setDiceSide(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
  }, [setDiceSide]);

  function handleRoll() {
    setRollingDice(true);
    setDiceSide(Math.floor(Math.random() * (6 - 1 + 1)) + 1);

    setTimeout(() => {
      setRollingDice(false);
    }, 1000);
  }

  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="wrapper">
        <Header
          variant={diceVariant}
          setVariant={setDiceVariant}
          color={diceColor}
          setColor={setDiceColor}
        />
        <Board
          side={diceSide}
          rolling={rollingDice}
          color={diceColor}
          handleRoll={handleRoll}
          variant={diceVariant}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
