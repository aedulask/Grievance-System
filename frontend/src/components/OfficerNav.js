import React from "react";
import { NavLink } from "react-router-dom";
import "./OfficerNav.css";

const OfficerNav = () => {
  return (
    <nav className="officer-nav">
      <NavLink to="/panchayat-officer/new-complaints">New Complaints</NavLink>
      <NavLink to="/panchayat-officer/ongoing-complaints">Ongoing Complaints</NavLink>
      <NavLink to="/panchayat-officer/completed-complaints">Completed Complaints</NavLink>
      <NavLink to="/help">Help</NavLink>
    </nav>
  );
};

export default OfficerNav;
