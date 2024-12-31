import React from "react";
import "./OngoingComplaints.css";

const OngoingComplaints = () => {
  const complaints = [
    {
      id: "O201",
      date: "2024-12-27",
      category: "Road",
      description: "Potholes in Main Street",
      status: ["Submitted", "Endorsed"],
    },
  ];

  const handleUpdate = (id) => {
    alert(`Complaint ${id} status updated.`);
  };

  return (
    <div className="ongoing-complaints">
      <h2>Ongoing Complaints</h2>
      {complaints.map((complaint) => (
        <div key={complaint.id} className="complaint-card">
          <p><strong>ID:</strong> {complaint.id}</p>
          <p><strong>Date:</strong> {complaint.date}</p>
          <p><strong>Category:</strong> {complaint.category}</p>
          <p><strong>Description:</strong> {complaint.description}</p>
          <button onClick={() => handleUpdate(complaint.id)}>Update Status</button>
        </div>
      ))}
    </div>
  );
};

export default OngoingComplaints;
