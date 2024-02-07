import React from "react";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i className="bx bxl-react"></i>
            <div>
              <h3 className="skills__name">React</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxs-rocket"></i>
            <div>
              <h3 className="skills__name">Astro</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bx-badge-check"></i>
            <div>
              <h3 className="skills__name">Next JS</h3>
            </div>
          </div>
          <div className="skills__group">
            <div className="skills__data">
              <i className="bx bxl-javascript"></i>
              <div>
                <h3 className="skills__name">Javascript</h3>
              </div>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-redux"></i>
            <div>
              <h3 className="skills__name">Redux</h3>
            </div>
          </div>
          <div className="skills__data">
            <i className="bx bxl-redux"></i>
            <div>
              <h3 className="skills__name">Redux Toolkit</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
