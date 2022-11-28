import "./ShaderToy.scss";

export default function ShaderToy({ id, className = "", gui = true, paused = true, muted = true }) {
  return (
    <iframe
      frameborder="0"
      className={`${className} shadertoy`}
      src={`https://www.shadertoy.com/embed/${id}?gui=${gui}&t=10&paused=${paused}&muted=${muted}`}
      allowfullscreen
    />
  );
}
