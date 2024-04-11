import RollDice from "./components/RollDice";
import Header from "./Header";
import "./App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

function App() {
  return (
    <>
      <Header />
      <RollDice />
    </>
  );
}

export default App;
