import React from "react";
import Home from "./pages/Home";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  function handleThemeSwitch() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="bg-[#f8f8f8] min-h-screen px-[10%]">
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Home />
      <Socials />
    </div>
  );
}

export default App;
