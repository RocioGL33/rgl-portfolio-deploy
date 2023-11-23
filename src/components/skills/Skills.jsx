import React from "react";
import Frontend from "./Frontend";
import Backend from "./Backend";
import Design from "./Design";
import "./Skills.css";
import { useTranslation } from "react-i18next";
import Frameworks from "./Frameworks";

const Skills = () => {
  const [t] = useTranslation("global");

  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">{t("skills.skill_title")}</h2>
      <span className="section__subtitle">{t("skills.skill_subtitle")}</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Frameworks />
      </div>
    </section>
  );
};

export default Skills;
