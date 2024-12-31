import React from "react";
import "./OfficerHome.css";

const OfficerHome = () => {
  return (
    <div className="officer-home">
      <h1>Welcome to the Panchayat Officer Dashboard</h1>
      <div className="info-boxes">
        <div className="box">Total Complaints: 120</div>
        <div className="box">New Complaints: 10</div>
        <div className="box">Resolved Complaints: 85</div>
      </div>
      <div className="image-section">
        <img src="/dashboard-image.jpg" alt="Panchayat Dashboard" />
      </div>
      <div className="faq-testimonials">
        <h2>FAQs</h2>
        <p>How to endorse complaints?</p>
        <p>How to update statuses?</p>
        <h2>Testimonials</h2>
        <p>"The system is seamless!" - Officer A</p>
      </div>
    </div>
  );
};

export default OfficerHome;
