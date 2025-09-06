import { useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero/>
    </div>
  );
}

export default App;
