import "./PublicationsSubView.scss";
import { Icon } from "@iconify/react";

export default function PublicationsSubView({ publications }) {
  return (
    <div className="publications-subview">
      {Object.keys(publications).map((pubCategory, n) => {
        const pubs = publications[pubCategory];
        return (
          <div className="publications" key={n}>
            <div className="header">{pubCategory}</div>
            {pubs
              .sort((a, b) => (b.date || b.year) - (b.date || a.year))
              .map((publication, i) => (
                <div className="publication" key={i}>
                  {pubCategory !== "recordings" ? (
                    <>
                      <span className="author">{publication.author} </span>
                      <span className="date"> ({publication.date}). </span>
                      {publication.doi ? (
                        <a className="name" href={publication.doi} target="_blank" rel="noreferrer">
                          {publication.name}
                        </a>
                      ) : (
                        <span className="name">{publication.name}</span>
                      )}
                      <span className="publisher">. {publication.publisher}, </span>
                      {publication.edition && <span className="edition">{publication.edition}. </span>}
                      {publication.pages && <span className="pages">{`pp. ${publication.pages[0]}-${publication.pages[1]}`}. </span>}
                    </>
                  ) : (
                    <>
                      <span className="album">{publication.album}</span>
                      <span className="date"> ({publication.year}). </span>
                      <a className="name" href={publication.url} target="_blank" rel="noreferrer">
                        {publication.track}
                      </a>
                      <span className="recordLabel">. {publication.recordLabel}. </span>
                      <span className="performers">
                        {publication.performers.map((performer, m) => (
                          <span key={m}>
                            {performer.name} ({performer.role}){m === publication.performers.length - 1 ? "." : ", "}
                          </span>
                        ))}{" "}
                      </span>
                    </>
                  )}
                  {publication.doi && (
                    <a className="doi" href={publication.doi || publication.url} target="_blank" rel="noreferrer">
                      <Icon className="icon" icon="mdi:link-variant" />
                    </a>
                  )}
                </div>
              ))}
          </div>
        );
      })}
    </div>
  );
}
