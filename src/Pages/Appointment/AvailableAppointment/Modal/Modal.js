import { format } from "date-fns";
import React from "react";

const Modal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  let selectedDate;
  if (date) {
    selectedDate = format(date, "PP");
  }

  const handleBooking = (e) => {
    e.preventDefault();
    const slot = e.target.slot.value;
    setTreatment(null)
    console.log(_id, name, slot);
  };

  return (
    <div>
      <input type="checkbox" id="book-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box relative">
          <label
            htmlFor="book-modal"
            className="btn btn-sm btn-circle absolute right-5 top-5"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-left">{name}</h3>
          <form onSubmit={handleBooking} className="mt-10">
            <input
              type="text"
              placeholder="Date"
              className="input input-bordered w-full mb-5"
              disabled
              value={selectedDate}
            />
            <select className="select select-bordered w-full mb-5" name="slot">
              {/* <option disabled selected>
                Select Time Slot
              </option> */}
              {slots.map((slot) => (
                <option value={slot}>{slot}</option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full mb-5"
            />
            <input
              type="submit"
              className="btn btn-accent input-bordered w-full mb-5"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
