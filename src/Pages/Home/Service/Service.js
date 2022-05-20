import React from "react";

const Service = ({ service }) => {
  const { img, serviceTitle, serviceDescription } = service;
  return (
    <div className="cursor-pointer bg-white card shadow-xl lg:w-1/3 py-7 w-full mb-2 mx-3">
      <figure>
        <img src={img} alt="Album" />
      </figure>
      <div className="card-body text-center justify-center">
        <h2 className="card-title block text-accent">{serviceTitle}</h2>
        <p>{serviceDescription}</p>
      </div>
    </div>
  );
};

export default Service;
