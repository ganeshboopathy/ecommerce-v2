import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;
