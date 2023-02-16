import Dropdown from "../../../components/Dropdown/Dropdown";
import "./ExperienceSubView.scss";

export default function ExperienceSubView({ work }) {
  const categories = ["academic", "other positions"];
  const maxValue = 10000;

  return (
    <div className="experience-subview">
      <div className="experience-scroll">
        {categories.map((key, k) => (
          <div className={`${key.replace(" ", "-")}`} key={k}>
            <div className="header">{key}</div>
            {work[key]
              .sort((a, b) => {
                a.date[1] = a.date[1] === true ? maxValue : a.date[1];
                return Math.max(...b.date) - Math.max(...a.date);
              })
              .map((position, i) => {
                return (
                  <div className="position" key={i}>
                    <span className="name">{position.name} </span>
                    <span className="workplace">{position.workplace}. </span>
                    <span className="city">
                      {position.city}. {position.country}.
                    </span>
                    <span className="date">
                      {position.date[1]
                        ? `${position.date[0]}–${position.date[1] === maxValue ? "pr." : String(position.date[1]).slice(2, 4)}`
                        : position.date[0]}
                    </span>
                    {position.duties && (
                      <Dropdown className={"description-dropdown"} legendOpen={"hide description"} legendClosed="show description">
                        <div className="duties">
                          {position.courses && <>Responsibilities:</>}
                          {position.duties.map((duty, i) => (
                            <span className="duty" key={i}>
                              <span className="bulletpoint">•</span> {duty}
                            </span>
                          ))}
                        </div>
                        {position.courses && (
                          <table className="courses">
                            <thead>
                              <tr>
                                <td>Courses:</td>
                              </tr>
                            </thead>
                            <tbody>
                              {position.courses.map((course, j) => (
                                <tr key={j} className="course">
                                  <td className="name">{course.name}</td>
                                  <td className="terms">{course.terms}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        )}
                      </Dropdown>
                    )}
                  </div>
                );
              })}
          </div>
        ))}
      </div>
    </div>
  );
}
