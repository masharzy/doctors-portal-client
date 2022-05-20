import React, { useEffect, useState } from "react";
import axios from "axios";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/apis/services")
    .then(res => setServices(res.data))
  },[])
  return (
    <div className="text-center mt-20 bg-slate-200 py-10">
      <div className="container mx-auto lg:px-20">
        <h4 className="font-bold text-secondary text-xl">OUR SERVICES</h4>
        <h4 className="text-4xl mb-8 text-accent">Services We Provide</h4>
        <div className="flex flex-wrap lg:flex-nowrap">

          {services.map(service => <Service key={service._id} service={service}/>)}

        </div>
      </div>
    </div>
  );
};

export default Services;
