import React from "react";

const AvailableAppointment = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div className="bg-white card shadow-xl py-7 mb-2 mx-3">
      <div className="card-body text-center justify-center">
        <h2 className="card-title block text-secondary">{name}</h2>
        {slots.length > 0 ? (
          <p>{slots[0]}</p>
        ) : (
          <p className="text-warning font-bold">NO SLOT AVAILABLE</p>
        )}
        <p>
          {slots.length} {slots.length <= 1 ? "SPACE" : "SPACES"} AVAILABLE
        </p>
        <label
          htmlFor="book-modal"
          disabled={slots.length === 0 ? true : false}
          className={
            slots.length === 0
              ? "btn bg-gray-200 w-44 mx-auto border-0"
              : "btn btn-primary bg-gradient-to-r from-secondary to-primary text-white w-44 mx-auto border-0"
          }
          onClick={() => setTreatment(service)}
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AvailableAppointment;
