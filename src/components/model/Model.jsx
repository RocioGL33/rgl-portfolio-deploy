import React from "react";
import { useTranslation } from "react-i18next";
import Models from "./Models";

const Model = () => {
  const [t] = useTranslation("global");
  return (
    <section className="work section" id="projects">
      <h2 className="section__title">{t("projects.project_1")}</h2>
      <span className="section__subtitle">
        {t("projects.projects_subtitle_1")}
      </span>
      <Models />
    </section>
  );
};

export default Model;
