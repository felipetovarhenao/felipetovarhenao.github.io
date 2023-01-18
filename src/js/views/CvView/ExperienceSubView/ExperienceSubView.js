import Dropdown from "../../../components/Dropdown/Dropdown";
import "./ExperienceSubView.scss";

export default function ExperienceSubView({ work }) {
  const categories = ["academic", "other positions"];
  const maxValue = 10000;

  return (
    <div className="experience-subview">
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
                  {position.courses && (
                    <Dropdown className={"courses-dropdown"} legendOpen={"hide courses"} legendClosed="show courses">
                      <table className="courses">
                        <tbody>
                          {position.courses.map((course, j) => (
                            <tr key={j} className="course">
                              <td className="name">{course.name}</td>
                              <td className="terms">{course.terms}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </Dropdown>
                  )}
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
