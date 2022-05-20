import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import axios from "axios";
import AvailableAppointment from "../AvailableAppointment/AvailableAppointment";
import Modal from "../AvailableAppointment/Modal/Modal";

const AvailableAppointments = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    axios.get("http://localhost:5000/apis/treatments").then((response) => setServices(response.data));
  }, []);


  let selectedDate = "Please select a day";
  if (date) {
    selectedDate = <p>Available Appointments on {format(date, "PP")}</p>;
  }
  return (
    <div className="text-center mt-20 py-10">
      <div className="container mx-auto lg:px-20">
        <h4 className="mb-24 text-secondary text-2xl">{selectedDate}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-y-3">
          {services.map((service) => (
            <AvailableAppointment key={service._id} service={service} setTreatment={setTreatment}/>
          ))}
        </div>
      </div>
      {treatment && <Modal treatment={treatment} date={date} setTreatment={setTreatment}/>}
    </div>
  );
};

export default AvailableAppointments;
