import "./ActivitiesSubView.scss";
import formatDate, { dateRange } from "../../../utils/formatDate";

export default function ActivitiesSubView({ work }) {
  return (
    <div className="activities-subview">
      <div className="residencies">
        <div className="header">residencies</div>
        {work.residencies.map((residence, i) => (
          <div className="residence" key={i}>
            <span className="role">{residence.role}</span>
            <span className="event">@ {residence.event}. </span>
            <span className="institution">{residence.institution}. </span>
            <span className="end">{dateRange(residence.date, residence.end)}. </span>
            <div className="activities">
              Activities:&nbsp;
              {residence.activities.map((ac, j) => (
                <span className="residence-activity" key={j}>
                  {ac}
                  {j < residence.activities.length - 1 ? ", " : "."}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="lectures">
        <div className="header">lectures/presentations</div>
        {work.lectures.map((lecture, i) => (
          <div className="lecture" key={i}>
            <span className="name">{lecture.name}</span>
            <div className="events">
              {lecture.events.map((ev, j) => (
                <div className="event" key={j}>
                  <span className="name">@ {ev.name}</span>
                  <span className="venue">{ev.venue}. </span>
                  <span className="date">{formatDate(ev.date)}. </span>
                  <span className="language">[{ev.language.slice(0, 3)}]. </span>
                  <br />
                  <span className="city">{ev.city}. </span>
                  <span className="country">{ev.country}.</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="workshops">
        <div className="header">workshops</div>
        {work.workshops.map((workshop, i) => (
          <div className="workshop" key={i}>
            <span className="name">{workshop.name}</span>
            <div className="events">
              {workshop.events.map((ev, j) => (
                <div className="event" key={j}>
                  <span className="institution">@ {ev.institution}. </span>
                  <span className="date">{formatDate(ev.date)}. </span>
                  <span className="language">[{ev.language.slice(0, 3)}]. </span>
                  <br />
                  <span className="num-sessions">{ev.numSessions} sessions, </span>
                  <span className="total-hours">{ev.totalHours} hours total. </span>
                  <br />
                  <span className="city">{ev.city}. </span>
                  <span className="country">{ev.country}.</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
