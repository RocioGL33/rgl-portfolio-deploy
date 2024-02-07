import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Qualification.css";

const Qualification = () => {
  const [t] = useTranslation("global");
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">{t("qualification.q_title")}</h2>
      <span className="section__subtitle">{t("qualification.q_subtitle")}</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            {t("qualification.education")}
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button__flex"
                : "qualification__button button__flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            {t("qualification.experience")}
          </div>
        </div>

        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  soyHenry - Bootcamp
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - 2022
                </div>
              </div>
            </div>
            <h4>_______________</h4>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Digital Marketing Fundamentals
                </h3>
                <span className="qualification__subtitle">Google Actívate</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qualification.calendar")}
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Web Developer</h3>
                <span className="qualification__subtitle">
                  NeoWyze - Argentina
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qualification.calendar_4")}
                </div>
              </div>
            </div>
            <h4>_______________</h4>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Frontend Developer</h3>
                <span className="qualification__subtitle">Betriax - Perú</span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qualification.calendar_2")}
                </div>
              </div>
            </div>
            <h4>_______________</h4>
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  {t("qualification.experience_2")}
                </h3>
                <span className="qualification__subtitle">
                  Chicas Programadoras
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  {t("qualification.calendar_3")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
