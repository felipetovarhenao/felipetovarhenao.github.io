import "./PublicationsSubView.scss";
import { Icon } from "@iconify/react";

export default function PublicationsSubView({ publications }) {
  return (
    <div className="publications-subview">
      {publications
        .sort((a, b) => b.date - a.date)
        .map((publication, i) => (
          <div className="publication" key={i}>
            <span className="author">{publication.author} </span>
            <span className="date"> ({publication.date}). </span>
            <a className="name" href={publication.doi} target="_blank" rel="noreferrer">
              {publication.name}
            </a>
            <span className="publisher">. {publication.publisher}, </span>
            <span className="edition">{publication.edition}. </span>
            <span className="pages">{`pp. ${publication.pages[0]}-${publication.pages[1]}`}. </span>
            <a className="doi" href={publication.doi} target="_blank" rel="noreferrer">
              <Icon className="icon" icon="mdi:link-variant" />
            </a>
          </div>
        ))}
    </div>
  );
}
