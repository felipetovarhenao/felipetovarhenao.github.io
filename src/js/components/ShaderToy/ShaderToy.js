import { useState } from "react";
import "./ShaderToy.scss";

export default function ShaderToy({ id, className = "", gui = true, paused = true, muted = true, t = 0 }) {
  const [clicked, setClicked] = useState(false);
  return (
    <div className={`${className} shadertoy ${clicked ? "clicked" : ""}`} onClick={() => setClicked(true)}>
      <img alt="hi" title={id} className="inner" src={`https://www.shadertoy.com/media/shaders/XfKfWd.jpg`} />
    </div>
  );
}
