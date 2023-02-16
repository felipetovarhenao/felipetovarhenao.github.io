import "./CvView.scss";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import ExpandableSlideShow from "../../components/ExpandableSlideShow/ExpandableSlideShow";
import EducationSubView from "./EducationSubView/EducationSubView";
import AwardsSubView from "./AwardsSubView/AwardsSubView";
import ExperienceSubView from "./ExperienceSubView/ExperienceSubView";
import ActivitiesSubView from "./ActivitiesSubView/ActivitiesSubView";
import PublicationsSubView from "./PublicationsSubView/PublicationsSubView";
import SkillsSubView from "./SkillsSubView/SkillsSubView";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function CvView({ cv, works }) {
  const slides = {
    "work experience": <ExperienceSubView work={cv.work} />,
    publications: <PublicationsSubView publications={cv.work.publications} />,
    "awards / grants": <AwardsSubView cv={cv} works={works} />,
    activities: <ActivitiesSubView work={cv.work} />,
    education: <EducationSubView education={cv.education} />,
    skills: <SkillsSubView skills={cv.skills} />,
  };
  const icons = [
    "mdi:company",
    "mdi:paper-text-outline",
    "healthicons:award-trophy",
    "fluent-mdl2:activity-feed",
    "mdi:education-outline",
    "carbon:skill-level-advanced",
  ];
  return (
    <div className="cv-view">
      <div className="cv-header">
        <Link className="cv-download" to="/cv">
          Download CV
        </Link>
        <ViewHeader title="CV" icon="material-symbols:work" />
        <div></div>
      </div>
      <ExpandableSlideShow
        titles={Object.keys(slides).map((key, i) => (
          <span key={i} className="cv-section-title">
            <Icon icon={icons[i]} className="icon" />
            &nbsp; &nbsp;
            {key}
          </span>
        ))}
        slides={Object.values(slides)}
      />
    </div>
  );
}
