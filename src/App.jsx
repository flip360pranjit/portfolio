import React from "react";
import Home from "./pages/Home";
import { useState } from "react";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import Footer from "./components/Footer/Footer";
import Collaborate from "./components/Contact/Collaborate";
import Routers from "./routers/Routers";
import getHeadComponent from "./layout/helmetComponents";
import { useLocation } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState("light");
  const location = useLocation();

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
    <>
      {getHeadComponent(location.pathname)}
      <div className="bg-lightPrimary dark:bg-darkPrimary text-lightText dark:text-darkText duration-1000 min-h-screen">
        <Navbar theme={theme} handleThemeSwitch={handleThemeSwitch} />
        <Routers />
        <Socials />
        <Collaborate />
        <Footer />
      </div>
    </>
  );
}

export default App;
