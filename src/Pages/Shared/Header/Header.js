import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../CustomLink/CustomLink";

const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="navbar bg-base-100 container mx-auto lg:px-20">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <CustomLink className="btn btn-ghost" to="/">
              Home
            </CustomLink>
            <CustomLink className="btn btn-ghost" to="/about">
              About Us
            </CustomLink>
            <CustomLink className="btn btn-ghost" to="/appointment">
              Appointment
            </CustomLink>
            <CustomLink className="btn btn-ghost" to="/reviews">
              Reviews
            </CustomLink>
            <CustomLink className="btn btn-ghost" to="/contact">
              Contact Us
            </CustomLink>
            <CustomLink className="btn btn-ghost" to="/login">
              Login
            </CustomLink>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Doctors Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          <CustomLink className="btn btn-ghost" to="/">
            Home
          </CustomLink>
          <CustomLink className="btn btn-ghost" to="/about">
            About Us
          </CustomLink>
          <CustomLink className="btn btn-ghost" to="/appointment">
            Appointment
          </CustomLink>
          <CustomLink className="btn btn-ghost" to="/reviews">
            Reviews
          </CustomLink>
          <CustomLink className="btn btn-ghost" to="/contact">
            Contact Us
          </CustomLink>
          {user ? (
            <button onClick={() => signOut(auth)} className="btn btn-secondary px-10 ml-1 rounded-full text-white">Log Out</button>
          ) : (
            <CustomLink className="btn btn-ghost" to="/login">
              Login
            </CustomLink>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
