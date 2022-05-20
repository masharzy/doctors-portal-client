import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-bg pb-10">
      <div className="footer py-20 text-neutral-content justify-between container mx-auto px-24">
        <div>
          <span className="footer-title text-lg text-black">Services</span>
          <a href="/" className="text-accent text-base">
            Emergency Checkup
          </a>
          <a href="/" className="text-accent text-base">
            Monthly Checkup
          </a>
          <a href="/" className="text-accent text-base">
            Weekly Checkup
          </a>
          <a href="/" className="text-accent text-base">
            Deep Checkup
          </a>
        </div>
        <div>
          <span className="footer-title text-lg text-black">ORAL HEALTH</span>
          <a href="/" className="text-accent text-base">
            Fluoride Treatment
          </a>
          <a href="/" className="text-accent text-base">
            Cavity Filling
          </a>
          <a href="/" className="text-accent text-base">
            Teath Whitening
          </a>
        </div>
        <div>
          <span className="footer-title text-lg text-black">OUR ADDRESS</span>
          <p className="text-accent text-base">New York - 101010 Hudson</p>
        </div>
      </div>
      <div className="text-center text-black">
        <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
