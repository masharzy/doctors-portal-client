import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Exceptional = () => {
  return (
    <div className="hero h-3/5 py-20">
      <div className="hero-content flex-col lg:flex-row container lg:px-32 mx-auto">
        <img src={treatment} className="max-w-sm rounded-lg shadow-2xl" alt="" />
        <div className="m-0 lg:ml-20">
          <h1 className="lg:text-5xl font-bold md:text-3xl text-2xl">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
