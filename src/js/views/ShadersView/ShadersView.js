import "./ShadersView.scss";
import ShaderToy from "../../components/ShaderToy/ShaderToy";
import ViewHeader from "../../components/ViewHeader/ViewHeader";

export default function ShadersView() {
  const shaders = ["Ds3fDX", "md3fDX", "Ds3BDl", "7tjSWy", "md3BWB", "NtBSRw", "7lBXWR", "NljXzm", "7lSXzz", "NljSz1", "Nt2XzD"];
  return (
    <>
      <ViewHeader title="shaders" icon="mdi:animation-play" />
      <div className="shaders-view">
        {shaders.map((x, i) => (
          <ShaderToy key={i} id={x} className="shader" />
        ))}
      </div>
    </>
  );
}
