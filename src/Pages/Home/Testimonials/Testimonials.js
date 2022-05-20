import axios from "axios";
import React, { useEffect, useState } from "react";
import quote from "../../../assets/icons/quote.svg";
import Testimonial from "../Testimonial/Testimonial";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/apis/testimonials")
      .then((res) => setTestimonials(res.data));
  },[]);
  return (
    <div className="container mx-auto my-20 lg:px-10">
      <div className="lg:flex justify-between items-center flex-none">
        <div className="texts text-center lg:text-left">
          <h4 className="font-bold text-secondary text-xl">Testimonial</h4>
          <h1 className="lg:text-4xl md:text-3xl text-2xl">
            What Our Patients Says
          </h1>
        </div>
        <div className="quote hidden lg:block">
          <img className="w-52" src={quote} alt="" />
        </div>
      </div>
      <div className="flex lg:flex-nowrap flex-wrap mt-10 px-10">
        {testimonials.map((testimonial) => (
          <Testimonial key={testimonial._id} testimonial={testimonial} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
