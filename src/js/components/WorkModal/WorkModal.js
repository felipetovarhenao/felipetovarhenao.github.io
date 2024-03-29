import "./WorkModal.scss";
import Modal from "../Modal/Modal";
import formatDate from "../../utils/formatDate";
import { Icon } from "@iconify/react";
import sortByDateString from "../../utils/sortByDateString";
import eventTracker from "../../utils/eventTracker";

export default function WorkModal({ work, open, setOpen }) {
  const tableRows = ["categories", "instrumentation", "awards", "performances"];

  return (
    <Modal open={open} setOpen={setOpen}>
      <div className={"work-modal"}>
        <div className="header">
          <span className="work-name">{work.name}</span>
          <span className="work-year">({work.year})</span>
          <span className="work-duration">~{work.duration}</span>
        </div>
        <div className="subheader">
          <span className="work-subtitle">{work.subtitle}</span>
          <span className="work-commission">{work.commission}</span>
        </div>
        {work.notes && <div className="notes">{work.notes}</div>}
        {/* {work.checkout && (
          <div className="checkout">
            {work.checkout.map((item) => (
              <a
                onClick={() => eventTracker("buy_score", { label: work.name })}
                target="_blank"
                rel="noreferrer"
                href={item.url}
                className="checkout__link"
                key={item}
              >
                buy {item.type}
              </a>
            ))}
          </div>
        )} */}
        <table className="table">
          <tbody className="table-body">
            {tableRows.map((row, i) => {
              return (
                work[row] && (
                  <tr key={i} className={`table-row  ${row}`}>
                    <td className={`row-key ${row}`}>{row}</td>
                    <td className={`row-value ${row}`}>
                      {work[row]
                        .sort((a, b) => sortByDateString(a.date, b.date))
                        .map((d, j) =>
                          row === "performances" ? (
                            <div className="performance" key={j}>
                              <span className="event">
                                {d.event}
                                {j === work[row].length - 1 && " (premiere)"}
                              </span>
                              <span className="venue">@ {d.venue}.</span>
                              <span className="date">{formatDate(d.date)}.</span>
                              <span className="city">{d.city}.</span>
                              <span className="country">{d.country}.</span>
                              <div className="performers">
                                {d.performers &&
                                  d.performers.map((p, k) => (
                                    <div className="performer" key={k}>
                                      <span className="performer-name">{p.name}, </span>
                                      <span className="performer-role">{p.role}</span>
                                    </div>
                                  ))}
                              </div>
                              {d.audio && (
                                <a
                                  onClick={() => eventTracker("listen_work", { label: work.name })}
                                  href={d.audio}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="media audio"
                                >
                                  <Icon icon="wpf:audio-wave" />
                                </a>
                              )}
                              {d.video && (
                                <a
                                  onClick={() => eventTracker("watch_work", { label: work.name })}
                                  href={`https://youtube.com/watch?v=${d.video}`}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="media video"
                                >
                                  <Icon icon="mdi:youtube" />
                                </a>
                              )}
                              {j < work[row].length - 1 && <hr className="separator" />}
                            </div>
                          ) : (
                            <span key={j} className={`row-value-item ${row}`}>
                              {row === "awards" ? (
                                <>
                                  • <span className="award-name">{d.name} </span>
                                  <span className="award-date">({d.date}). </span>
                                  <span className="award-institution">{d.institution}. </span>
                                  <span className="award-country">{d.country}.</span>
                                </>
                              ) : (
                                d
                              )}
                            </span>
                          )
                        )}
                    </td>
                  </tr>
                )
              );
            })}
          </tbody>
        </table>
      </div>
    </Modal>
  );
}
