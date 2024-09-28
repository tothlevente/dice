import WelcomeDialog from "./components/WelcomeDialog";
import DiceRolling from "./components/DiceRolling";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { useEffect, useState } from "react";
import { createTheme, Paper } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    mode: "light",
    primary: {
      main: grey[800],
    },
    secondary: {
      main: grey[700],
    },
    background: {
      default: grey[200],
    },
  },
});

export default function App() {
  const [color, setColor] = useState(
    localStorage.getItem("color") || grey[900]
  );
  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(true);
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
    if (JSON.parse(localStorage.getItem("welcome")!) === false) {
      setOpenWelcomeDialog(false);
    }
  }, [setOpenWelcomeDialog]);

  return (
    <ThemeProvider theme={theme}>
      <div className="site-wrapper">
        <Header color={color} setColor={setColor} />
        <main>
          <WelcomeDialog
            openWelcomeDialog={openWelcomeDialog}
            setOpenWelcomeDialog={setOpenWelcomeDialog}
          />
          <Paper
            elevation={0}
            square
            sx={{
              pb: "150px",
              "@media (max-width: 459px)": {
                pb: "200px",
              },
              "@media (max-width: 349px)": {
                pb: "300px",
              },
              bgcolor: "#f2f2f2",
            }}
          >
            <DiceRolling
              dice={dice}
              rolling={rolling}
              color={color}
              handleRoll={handleRoll}
            />
          </Paper>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}
