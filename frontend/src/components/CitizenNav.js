import React from "react";
import { NavLink } from "react-router-dom";
import "./CitizenNav.css";

const CitizenNav = () => {
  return (
    <nav className="citizen-nav">
      <NavLink to="/citizen/home">Home</NavLink>
      <NavLink to="/citizen/ongoing">Ongoing Grievances</NavLink>
      <NavLink to="/citizen/completed">Completed Grievances</NavLink>
      <NavLink to="/citizen/file-grievance">File a New Grievance</NavLink>
      <NavLink to="/citizen/help">Help</NavLink>
    </nav>
  );
};

export default CitizenNav;
