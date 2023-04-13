import React from "react";
import { useTranslation } from "react-i18next";
import "./Work.css";
import Works from "./Works";

const Work = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <section className="work section" id="projects">
      <h2 className="section__title">{t("projects.projects_title")}</h2>
      <span className="section__subtitle">
        {t("projects.projects_subtitle")}
      </span>
      <Works />
    </section>
  );
};

export default Work;
