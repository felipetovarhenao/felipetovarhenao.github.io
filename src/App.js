/* react */
import { Routes, Route, useNavigate } from "react-router-dom";

/* components */
import { ThemeContext } from "./js/contexts/ThemeContext";
import HomeView from "./js/views/HomeView/HomeView";
import NavBar from "./js/components/NavBar/NavBar";
import WorksView from "./js/views/WorksView/WorksView";
import SoftwareView from "./js/views/SoftwareView/SoftwareView";
import CvView from "./js/views/CvView/CvView";
import cv from "./json/cv.json";
import works from "./json/work-catalog.json";
import ShadersView from "./js/views/ShadersView/ShadersView";

/* sass */
import "./index.scss";
import classNames from "classnames";
import { useEffect, useState } from "react";

function CvDownload() {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 500);
  window.location.href = "https://d2cqospqxtt8fw.cloudfront.net/personal-website/cv.pdf";
  return <></>;
}

export default function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const appClass = classNames("app", { dark: darkTheme });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "light") {
      setDarkTheme(false);
    } else if (theme === "dark") {
      setDarkTheme(true);
    }
  }, []);

  return (
    <div className={appClass}>
      <div className="app-bg"></div>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <Routes>
          <Route
            path="*"
            element={
              <>
                <Routes>
                  <Route path="/cv" element={<CvDownload />} />
                </Routes>
                <NavBar />
                <HomeView cv={cv} />
                <WorksView works={works} />
                <SoftwareView cv={cv} />
                <CvView cv={cv} works={works} />
                <ShadersView />
                <div className="footer">{new Date(Date.now()).getFullYear()} © Felipe Tovar-Henao</div>
              </>
            }
          />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}
