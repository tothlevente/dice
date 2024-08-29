import DiceRoll from "./components/DiceRoll";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useState } from "react";

export default function App() {
  const [color, setColor] = useState("#000");

  return (
    <div className="site-wrapper">
      <Header color={color} setColor={setColor} />
      <main>
        <DiceRoll />
      </main>
      <Footer />
    </div>
  );
}
