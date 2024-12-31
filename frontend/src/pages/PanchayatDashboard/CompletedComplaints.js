import React from "react";
import "./CompletedComplaints.css";

const CompletedComplaints = () => {
  const complaints = [
    {
      id: "C301",
      date: "2024-12-25",
      category: "Electricity",
      description: "Frequent power cuts in Sector 5",
    },
    {
      id: "C302",
      date: "2024-12-22",
      category: "Water",
      description: "Leakage in main pipeline at Block D",
    },
  ];

  return (
    <div className="completed-complaints">
      <h2>Completed Complaints</h2>
      {complaints.map((complaint) => (
        <div key={complaint.id} className="complaint-card">
          <p><strong>ID:</strong> {complaint.id}</p>
          <p><strong>Date:</strong> {complaint.date}</p>
          <p><strong>Category:</strong> {complaint.category}</p>
          <p><strong>Description:</strong> {complaint.description}</p>
          <button className="completed-button">Completed</button>
        </div>
      ))}
    </div>
  );
};

export default CompletedComplaints;
