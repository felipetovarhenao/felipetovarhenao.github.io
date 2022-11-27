import "./ModalBase.scss";
import classNames from "classnames";
import { createPortal } from "react-dom";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

export default function ModalBase({ children, open, setOpen }) {
  const { darkTheme } = useContext(ThemeContext);
  return createPortal(
    <div className={classNames("modal-base", open && "open", { dark: darkTheme })} onClick={() => setOpen && setOpen(false)}>
      <div className="modal-base-inner" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.getElementById("portal")
  );
}
