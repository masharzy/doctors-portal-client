import React from "react";
import Appointment from "../Appointment/Appointment";
import Contact from "../Contact/Contact";
import Exceptional from "../Exceptional/Exceptional";
import Hero from "../Hero/Hero";
import Infos from "../Infos/Infos";
import Services from "../Services/Services";
import Testimonials from "../Testimonials/Testimonials";
import Footer from '../../Shared/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Infos/>
      <Services/>
      <Exceptional/>
      <Appointment/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  );
};

export default Home;
