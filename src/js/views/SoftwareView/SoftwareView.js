import "./SoftwareView.scss";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { Icon } from "@iconify/react";
import Card from "../../components/Card/Card";
import eventTracker from "../../utils/eventTracker";

export default function SoftwareView({ cv }) {
  const tableRows = ["year", "active", "keywords", "description"];
  const stateMap = {
    true: "material-symbols:check-circle",
    false: "gridicons:cross-circle",
  };
  return (
    <>
      <ViewHeader title="software" icon="material-symbols:code" />
      <div className="software-view">
        {cv.work.software
          .sort((a, b) => b.year - a.year)
          .map((software, i) => (
            <Card key={i} className="software" img={software.artwork}>
              <a
                href={software.url}
                onClick={() => {
                  eventTracker("view_software", { label: software.name });
                }}
                target="_blank"
                rel="noreferrer"
              >
                <span className="name">{software.name}</span>
                <table className="table">
                  <tbody className="tbody">
                    {tableRows.map((row, j) => (
                      <tr key={j} className={`row ${row}`}>
                        <td className={`${row} key`}>{row}</td>
                        <td className={`${row} value`}>
                          {row === "active" ? (
                            <Icon className={`icon ${software[row] ? "active" : "not-active"}`} icon={stateMap[software[row]]} />
                          ) : row === "keywords" ? (
                            software[row].map((item, k) => (
                              <span className={`value-item ${row}`} key={k}>
                                {item}
                              </span>
                            ))
                          ) : (
                            software[row]
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </a>
            </Card>
          ))}
      </div>
    </>
  );
}
