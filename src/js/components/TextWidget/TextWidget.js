import classNames from "classnames";
import { Icon } from "@iconify/react";
import "./TextWidget.scss";
import { useState } from "react";
import eventTracker from "../../utils/eventTracker";

export default function TextWidget({ children, label }) {
  const [show, setShow] = useState(false);
  const iconMap = {
    open: "material-symbols:keyboard-arrow-right",
    closed: "material-symbols:keyboard-arrow-down",
  };
  return (
    <div className="text-widget">
      <div
        className="text-widget-btn"
        onClick={() => {
          eventTracker("toggle_bio");
          setShow((x) => !x);
        }}
      >
        <Icon icon={iconMap[!show ? "open" : "closed"]} className="icon" />
        <span className="text">
          {show ? "hide" : "show"} {label}
        </span>
      </div>
      <div className={classNames("text-widget-inner", { show: show })}>{children}</div>
    </div>
  );
}
