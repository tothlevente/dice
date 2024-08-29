import DiceRolling from "./components/DiceRolling";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useEffect, useState } from "react";

export default function App() {
  const [color, setColor] = useState(localStorage.getItem("color") || "#000");
  const [rolling, setRolling] = useState(false);
  const [dice, setDice] = useState(1);

  function handleRoll() {
    setRolling(true);
    setDice(Math.floor(Math.random() * (6 - 1 + 1)) + 1);

    setTimeout(() => {
      setRolling(false);
    }, 1000);
  }

  useEffect(() => {
    setDice(Math.floor(Math.random() * (6 - 1 + 1)) + 1);
  }, [setDice]);

  return (
    <div className="site-wrapper">
      <Header color={color} setColor={setColor} />
      <main>
        <DiceRolling dice={dice} rolling={rolling} color={color} handleRoll={handleRoll} />
      </main>
      <Footer />
    </div>
  );
}
