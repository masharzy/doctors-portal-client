import React from "react";
import heroImage from "../../../assets/images/chair.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="container mx-auto hero hero-bg rounded-xl">
      <div className="py-32">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={heroImage}
            className="lg:max-w-2xl md:max-w-xl rounded-lg shadow-2xl sm:max-w-full"
            alt=""
          />
          <div>
            <h1 className="text-5xl font-bold text-accent">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the
            </p>
            <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
