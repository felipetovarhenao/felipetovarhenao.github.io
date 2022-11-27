/* react */

/* components */
import { ThemeContext } from "./js/contexts/ThemeContext";
import HomeView from "./js/views/HomeView/HomeView";
import NavBar from "./js/components/NavBar/NavBar";
import WorksView from "./js/views/WorksView/WorksView";
import SoftwareView from "./js/views/SoftwareView/SoftwareView";
import CvView from "./js/views/CvView/CvView";
import cv from "./json/cv.json";
import works from "./json/work-catalog.json";

/* sass */
import "./index.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const appClass = classNames("app", { dark: darkTheme });

  useEffect(() => {
    const theme = localStorage.getItem("felipetovarhenao-theme");
    if (theme === "light") {
      setDarkTheme(false);
    } else if (theme === "dark") {
      setDarkTheme(true);
    }
  }, []);

  return (
    <div className={appClass}>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <NavBar />
        <HomeView cv={cv} />
        <WorksView works={works} />
        <SoftwareView cv={cv} />
        <CvView cv={cv} works={works} />
        <div className="footer">{new Date(Date.now()).getFullYear()} © Felipe Tovar-Henao</div>
      </ThemeContext.Provider>
    </div>
  );
}
