import "./Dropdown.scss";
import { useState } from "react";
import { Icon } from "@iconify/react";
import classNames from "classnames";

export default function Dropdown({ children, legendOpen, legendClosed, className, openByDefault }) {
  const [open, setOpen] = useState(openByDefault);
  return (
    <div className={classNames("dropdown", className || "")}>
      <div className="btn" onClick={() => setOpen((x) => !x)}>
        <Icon icon={open ? "material-symbols:keyboard-arrow-down" : "material-symbols:keyboard-arrow-right"} className="btn-icon" />
        <span className="btn-txt">{open ? legendOpen : legendClosed}</span>
      </div>
      <div className={classNames({ open: open }, "content")}>{children}</div>
    </div>
  );
}
