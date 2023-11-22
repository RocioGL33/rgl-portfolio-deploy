import React from "react";
import ModelItem from "../work/WorkItems";
import { models } from "./ModelData";

const Models = () => {
  return (
    <div className="work__container container grid">
      {models.map((item) => {
        return <ModelItem item={item} key={item.id} />;
      })}
    </div>
  );
};

export default Models;
