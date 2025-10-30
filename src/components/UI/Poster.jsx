import React from "react";
import style from "../../styles/Poster.module.css";
const Poster = () => {
  console.log("poster");

  return (
    <div
      className={`${style.bgdiv} ${style.poster}`}
    >
      <div
        className={` ${style.container} ${style.anim1}`}
      >
        <h1
          className={`md:text-[42px] text-[#ece46b] text-[19px] mt-5 font-bold ${style.f1} `}
        >
          Glorious Educational Academy
        </h1>
        <p className="text-[9px] md:text-[16px] text-[#cee4e6] font-semibold ">
          Founded in 2015, Glorious Educational Academy is a premier
          co-educational English medium school located in Indore. Affiliated
          with the M.P. Board, Bhopal, and following the CBSE pattern, we
          combine academic rigor with a nurturing environment to prepare
          students for success in every field of life. Our students consistently
          shine in academics and sports, earning accolades and recognition at
          various levels. Behind their success is a team of passionate
          educators, committed administrative staff, and a strong support system
          of parents and well-wishers who believe in our vision. At Glorious, we
          don’t just teach — we inspire, empower, and shape the leaders of
          tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Poster;
