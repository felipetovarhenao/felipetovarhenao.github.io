import { Icon } from "@iconify/react";
import { useContext } from "react";
import "./ThemeSwitch.scss";
import { ThemeContext } from "../../contexts/ThemeContext";

export default function ThemeSwitch() {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <div
      className="theme-switch"
      onClick={() => {
        localStorage.setItem("theme", darkTheme ? "light" : "dark");
        setDarkTheme((x) => !x);
      }}
    >
      <Icon icon="ic:baseline-dark-mode" />
      <div className="pin-outer">
        <div className="pin-inner" style={!darkTheme ? { marginLeft: "40%", marginRight: "0%" } : { marginRight: "40%", marginLeft: "0%" }} />
      </div>
      <Icon icon="ic:outline-light-mode" />
    </div>
  );
}
