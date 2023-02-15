import "./HomeView.scss";
import ProfileIcon from "../../components/ProfileIcon/ProfileIcon";
import TextWidget from "../../components/TextWidget/TextWidget";
import Avatar from "../../components/Avatar/Avatar";

export default function HomeView({ cv }) {
  const iconMap = {
    github: "mdi:github",
    soundcloud: "grommet-icons:soundcloud",
    youtube: "mdi:youtube",
    linkedin: "mdi:linkedin",
    gmail: "bxl:gmail",
  };
  const basics = cv.basics;
  return (
    <div className="home-view">
      <div className="header">
        <Avatar url={basics.image} />
        <div className="text">
          <h1 className="name">{basics.name}</h1>
          <h2 className="labels">
            <>
              <span className="decorator">{"{"}</span>
              {basics.labels.map((l, i) => (
                <span className="label" key={`label-${i}`}>
                  <span className="label-text">{l}</span>
                  {i < basics.labels.length - 1 && (
                    <span className="decorator" key={`decorator-${i}`}>
                      +
                    </span>
                  )}
                </span>
              ))}
              <span className="decorator">{"}"}</span>
            </>
          </h2>
        </div>
        <div className="profiles">
          {basics.profiles.map((p, i) => (
            <ProfileIcon key={i} url={p.url} id={iconMap[p.network.toLowerCase()]} network={p.network} />
          ))}
        </div>
        <TextWidget label="bio">
          <div className="bio">
            {basics.summary.map((p, i) => (
              <p key={i} className="bio-p">
                {p}
              </p>
            ))}
            <span className="header">Interests</span>
            <div className="interests">
              {basics.interests.sort().map((x, i) => (
                <span key={i} className="interest">
                  {x}
                </span>
              ))}
            </div>
          </div>
        </TextWidget>
      </div>
    </div>
  );
}
