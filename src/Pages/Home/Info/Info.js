import React from "react";

const Info = ({ info }) => {
  const { infoTitle, img, infoDescription, bgColor } = info;
  return (
    <div
      className={`cursor-pointer card lg:card-side shadow-xl lg:w-1/3 py-7 w-full mb-2 mx-3 ${bgColor}`}
    >
      <figure>
        <img className="pl-6" src={img} alt="" />
      </figure>
      <div className="card-body text-white -ml-2">
        <h2 className="card-title">{infoTitle}</h2>
        <p>{infoDescription}</p>
      </div>
    </div>
  );
};

export default Info;
