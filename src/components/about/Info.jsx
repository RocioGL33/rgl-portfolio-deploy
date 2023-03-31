import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <i class="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Experience with groups</h3>
        <span className="about__subtitle">Teaching Assistant in Henry</span>
      </div>
      <div className="about__box">
        <i class="bx bx-award about__icon"></i>
        <h3 className="about__title">ONG Volunteering</h3>
        <span className="about__subtitle">Mentor at Chicas Programadoras</span>
      </div>
    </div>
  );
};

export default Info;
