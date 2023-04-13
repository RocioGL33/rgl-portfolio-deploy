import React from "react";
import { useTranslation } from "react-i18next";

const Info = () => {
  const [t, i18n] = useTranslation("global");

  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">{t("about.experience_1")}</h3>
        <span className="about__subtitle">{t("about.subtitle_1")}</span>
      </div>
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">{t("about.experience_2")}</h3>
        <span className="about__subtitle">{t("about.subtitle_2")}</span>
      </div>
    </div>
  );
};

export default Info;
