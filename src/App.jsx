import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import Products from "./Component/Product/Products";
import 'aos/dist/aos.css';
import Aos from 'aos';
import TopProduct from "./Component/TopProduct/TopProduct";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <div className={theme}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Hero />
      <Products />
      <TopProduct/>
    </div>
  );
}

export default App;
