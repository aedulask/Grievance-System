import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import OfficerHome from "./OfficerHome";
import NewComplaints from "./NewComplaints";
import OngoingComplaints from "./OngoingComplaints";
import CompletedComplaints from "./CompletedComplaints";

const OfficerDashboard = () => {
  return (
    <Router>
      <div>
        <nav className="officer-navbar">
          <a href="/officer-dashboard">Home</a>
          <a href="/officer-dashboard/new-complaints">New Complaints</a>
          <a href="/officer-dashboard/ongoing-complaints">Ongoing Complaints</a>
          <a href="/officer-dashboard/completed-complaints">Completed Complaints</a>
          <a href="/officer-dashboard/help">Help</a>
        </nav>
        <Routes>
          <Route path="/" element={<OfficerHome />} />
          <Route path="/new-complaints" element={<NewComplaints />} />
          <Route path="/ongoing-complaints" element={<OngoingComplaints />} />
          <Route path="/completed-complaints" element={<CompletedComplaints />} />
        </Routes>
      </div>
    </Router>
  );
};

export default OfficerDashboard;
