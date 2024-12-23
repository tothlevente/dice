import { ThemeProvider } from "./components/theme-provider";
import { useEffect, useState } from "react";

import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";
import Board from "./components/contents/Board";

export default function App() {
  const [rollingDice, setRollingDice] = useState(false);
  const [diceColor, setDiceColor] = useState("");
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
        <Header />
        <Board
          side={diceSide}
          rolling={rollingDice}
          color={diceColor}
          handleRoll={handleRoll}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
