import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-bg py-20">
      <div className="container mx-auto lg:px-20">
        <div className="texts text-center">
          <h4 className="font-bold text-secondary text-xl">Contact Us</h4>
          <h1 className="lg:text-4xl md:text-3xl text-2xl text-white">
            Stay connected with us
          </h1>
        </div>
        <div className="w-full lg:w-1/2 p-10 mx-auto">
          <input type="text" placeholder="Email Address" className="input mb-2 w-full" />
          <input type="text" placeholder="Subject" className="input mb-2 w-full" />
          <textarea className="textarea w-full mb-2 h-28" placeholder="Your message"></textarea>
          <input
            type="submit"
            className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mx-auto block px-8"
            value="Submit"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
