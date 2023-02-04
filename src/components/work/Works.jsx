import React from "react";
import WorkItem from "../work/WorkItems";
import { projects } from "../work/Data";

const Works = () => {
  return (
    <div className="work__container container grid">
      {projects.map((item) => {
        return <WorkItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Works;
