import React from "react";

const Design = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Design / Styles</h3>

      <div className="skills__box">
        <div className="skills__data">
          <i className="bx bxs-component"></i>
          <div>
            <h3 className="skills__name">MaterialUI</h3>
          </div>
        </div>
        <div className="skills__data">
          <i className="bx bxl-sass"></i>
          <div>
            <h3 className="skills__name">Sass</h3>
          </div>
        </div>
        <div className="skills__data">
          <i className="bx bxl-tailwind-css"></i>
          <div>
            <h3 className="skills__name">TailwindCSS</h3>
          </div>
        </div>
      </div>
      <div className="skills__data">
        <i className="bx bxl-bootstrap"></i>
        <div>
          <h3 className="skills__name">Bootstrap</h3>
        </div>
      </div>
      <div className="skills__data">
        <i className="bx bxl-figma"></i>
        <div>
          <h3 className="skills__name">Figma</h3>
        </div>
      </div>
      <div className="skills__data">
        <i className="bx bxs-book-content"></i>
        <div>
          <h3 className="skills__name">Materialize</h3>
        </div>
      </div>
    </div>
  );
};

export default Design;
