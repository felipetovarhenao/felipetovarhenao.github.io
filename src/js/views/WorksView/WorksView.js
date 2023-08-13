import "./WorksView.scss";
import WorkCard from "../../components/WorkCard/WorkCard";
import WorkModal from "../../components/WorkModal/WorkModal";
import ViewHeader from "../../components/ViewHeader/ViewHeader";
import { useState } from "react";
import eventTracker from "../../utils/eventTracker";

export default function WorksView({ works }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWork, setSelectedWork] = useState(false);

  return (
    <>
      <ViewHeader title={"works"} icon="mdi:music" />
      <div className="works-view">
        <div className="work-cards">
          {works
            .sort((a, b) => b.year - a.year)
            .map((work, i) => (
              <WorkCard
                key={i}
                className="work-card"
                work={work}
                onClick={() => {
                  setIsModalOpen(true);
                  setSelectedWork(work);
                  eventTracker("view_work", { label: work.name });
                }}
              />
            ))}
        </div>
        <WorkModal work={selectedWork} open={isModalOpen} setOpen={setIsModalOpen} />
      </div>
    </>
  );
}
