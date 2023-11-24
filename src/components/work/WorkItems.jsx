import React from "react";
import { useTranslation } from "react-i18next";

const WorkItems = ({ item }) => {
  const [t] = useTranslation("global");
  console.log(item.category);

  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="Not Found" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <h5>{item.category}</h5>
      <br />
      <p className="work__desc">{item.description}</p>
      <br />
      <p className="work__desc">
        <b>{item.techStack}</b>
      </p>
      <br />
      <a
        href={item.url}
        className="work__button"
        target="_blank"
        rel="noreferrer"
      >
        {item.category === "Mobile"
          ? t("projects.visit_2")
          : t("projects.visit")}
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
