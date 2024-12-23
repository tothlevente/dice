import { ThemeProvider } from "./components/theme-provider";
import { useEffect, useState } from "react";

import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";
import Board from "./components/contents/Board";

export default function App() {
  const [shakingDice, setShakingDice] = useState(false);
  const [diceSide, setDiceSide] = useState(1);

  useEffect(() => {
    setDiceSide(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
  }, [setDiceSide]);

  function handleRoll() {
    setShakingDice(true);
    setDiceSide(Math.floor(Math.random() * (6 - 1 + 1)) + 1);

    setTimeout(() => {
      setShakingDice(false);
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
          shaking={shakingDice}
          color="red"
          handleRoll={handleRoll}
        />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
