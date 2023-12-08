import React from "react";
import Home from "./pages/Home";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";

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
    <div className="bg-gray-200 dark:bg-black min-h-screen px-[10%]">
      <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
      <Home />
    </div>
  );
}

export default App;
