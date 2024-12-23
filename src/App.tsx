import { ThemeProvider } from "./components/theme-provider";

import Footer from "./components/contents/Footer";
import Header from "./components/contents/Header";
import Board from "./components/contents/Board";

export default function App() {
  return (
    <ThemeProvider
      defaultTheme="light"
      storageKey="vite-ui-theme"
    >
      <div className="wrapper">
        <Header />
        <Board />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
