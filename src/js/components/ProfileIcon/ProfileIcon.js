import "./ProfileIcon.scss";
import { Icon } from "@iconify/react";
import eventTracker from "../../utils/eventTracker";

export default function ProfileIcon({ id, url, network }) {
  return (
    <a onClick={() => eventTracker("view_socials", { label: network })} href={url} className="profile-icon" target="_blank" rel="noreferrer">
      <Icon className="icon" icon={id} />
      <span className="name">{network}</span>
    </a>
  );
}
