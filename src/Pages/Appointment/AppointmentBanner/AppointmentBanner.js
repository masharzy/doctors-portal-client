import React from "react";
import appointmentImage from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import "./AppointmentBanner.css";
import { format } from "date-fns";

const AppointmentBanner = ({ date, setDate }) => {
  let footer = <p>Please select day</p>;
  if (date) {
    footer = <p>You have selected {format(date, "PP")}.</p>;
  }
  return (
    <div className="container mx-auto hero hero-bg rounded-xl">
      <div className="py-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={appointmentImage}
            className="lg:max-w-2xl rounded-lg shadow-2xl max-w-full m-10 lg:ml-10"
            alt=""
          />
          <div>
            <DayPicker mode="single" selected={date} onSelect={setDate} />
            {footer}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;
