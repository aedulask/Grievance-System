import React, { useState } from "react";
import "./NewComplaints.css";

const NewComplaints = () => {
  const [complaints, setComplaints] = useState([
    {
      id: 1,
      date: "2024-12-30",
      priority: "High",
      category: "Road",
      description: "Potholes on Main Street causing accidents.",
    },
    {
      id: 2,
      date: "2024-12-29",
      priority: "Medium",
      category: "Water",
      description: "Frequent water supply interruptions in Sector 15.",
    },
  ]);

  const handleEndorse = (id) => {
    alert(`Complaint ${id} endorsed!`);
    // Update state or send request to the backend
  };

  const handleForward = (id, department) => {
    alert(`Complaint ${id} forwarded to ${department}!`);
    // Update state or send request to the backend
  };

  return (
    <div className="new-complaints-container">
      <h2>New Complaints Received</h2>
      {complaints.map((complaint) => (
        <div className="complaint-card" key={complaint.id}>
          <h3>Complaint ID: {complaint.id}</h3>
          <p><strong>Date:</strong> {complaint.date}</p>
          <p><strong>Priority:</strong> {complaint.priority}</p>
          <p><strong>Category:</strong> {complaint.category}</p>
          <p><strong>Description:</strong> {complaint.description}</p>
          <div className="actions">
            <button
              className="endorse-btn"
              onClick={() => handleEndorse(complaint.id)}
            >
              Endorse
            </button>
            <select
              onChange={(e) =>
                handleForward(complaint.id, e.target.value)
              }
              defaultValue=""
            >
              <option value="" disabled>
                Forward to...
              </option>
              <option value="Water">Water</option>
              <option value="Electricity">Electricity</option>
              <option value="Road">Road</option>
            </select>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewComplaints;
