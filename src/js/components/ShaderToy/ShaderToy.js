import { useState } from "react";
import "./ShaderToy.scss";

export default function ShaderToy({ id, className = "", gui = false, paused = true, muted = true, t = 0 }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={`${className} shadertoy ${clicked ? "clicked" : ""}`} onClick={() => setClicked(true)}>
      <iframe
        title={id}
        className="inner"
        frameBorder="0"
        src={`https://www.shadertoy.com/embed/${id}?gui=${gui}&t=${t}&paused=${paused}&muted=${muted}`}
        allowFullScreen
      />
    </div>
  );
}
