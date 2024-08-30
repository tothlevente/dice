import NoticeDialog from "./components/NoticeDialog";
import DiceRolling from "./components/DiceRolling";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useEffect, useState } from "react";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

export default function App() {
  const [color, setColor] = useState(localStorage.getItem("color") || "#000");
  const [showNoticeDialog, setShowNoticeDialog] = useState(true);
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

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("showNoticeDialog")!) === false) {
      setShowNoticeDialog(false);
    }
  }, [setShowNoticeDialog]);

  return (
    <ThemeProvider theme={theme}>
      <div className="site-wrapper">
        <Header color={color} setColor={setColor} />
        <main>
          <NoticeDialog open={showNoticeDialog} setOpen={setShowNoticeDialog} />
          <DiceRolling dice={dice} rolling={rolling} color={color} handleRoll={handleRoll} />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
