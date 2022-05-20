import React from "react";
import appointMentImage from "../../../assets/images/doctor-small.png";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="hero appointment-bg h-3/5 mt-20">
      <div className="hero-content container lg:px-20 mx-auto py-0 items-center">
        <img src={appointMentImage} className="max-w-lg mt-[-80px] hidden lg:block" alt="" />
        <div className="m-0 text-white my-5">
        <h4 className="font-bold text-secondary text-xl">Appointment</h4>
          <h1 className="lg:text-4xl md:text-3xl text-2xl">
            Make an appointment Today
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

export default Appointment;
