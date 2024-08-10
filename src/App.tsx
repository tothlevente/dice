import DiceRoll from "./components/DiceRoll";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { Component, ReactNode } from "react";

export default class App extends Component {
  render(): ReactNode {
    return (
      <div className="site-wrapper">
        <Header />
        <main>
          <DiceRoll />
        </main>
        <Footer />
      </div>
    );
  }
}
