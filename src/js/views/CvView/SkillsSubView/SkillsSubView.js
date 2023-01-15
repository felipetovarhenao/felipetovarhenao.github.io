import "./SkillsSubView.scss";

export default function SkillsSubView({ skills }) {
  const maxLevel = 5;
  const fields = ["languages", "technology"];
  return (
    <div className="skills-subview">
      {fields.map((field, k) => (
        <div key={k} className={`${field}`}>
          <div className="header">{field}</div>
          {skills[field]
            .sort((a, b) => a.level - b.level)
            .map((skill, i) => {
              const levelWidth = ((maxLevel - skill.level) / maxLevel) * 100;
              const levelColor = `var(--level${maxLevel - skill.level})`;
              return (
                <div className="skill" key={i}>
                  <div className="level" style={{ width: `${levelWidth}%`, backgroundColor: levelColor }} />
                  <div className="skill-info">
                    <span className="name">{skill.name}</span>
                    {skill.keywords && (
                      <div className="keywords">
                        {skill.keywords.map((kw, k) => (
                          <span className="keyword" key={k}>
                            {kw}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      ))}
    </div>
  );
}
