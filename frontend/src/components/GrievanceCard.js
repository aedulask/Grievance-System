import React, { useState } from "react";
import "./GrievanceCard.css";

const GrievanceCard = ({ grievance }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="grievance-card">
      <div className="card-header">
        <h3>ID: {grievance.id}</h3>
        <p>Date: {grievance.date}</p>
      </div>
      <div className="card-details">
        <p><strong>Category:</strong> {grievance.category}</p>
        <p><strong>Priority:</strong> {grievance.priority}</p>
        <p><strong>Description:</strong> {grievance.description.slice(0, 50)}...</p>
      </div>
      <button onClick={toggleExpand}>
        {isExpanded ? "Hide Details" : "Show Status"}
      </button>
      {isExpanded && (
        <div className="card-expanded">
          <h4>Tracking Status:</h4>
          <ul>
            {grievance.tracking.map((stage, index) => (
              <li key={index} className={stage.completed ? "completed" : ""}>
                {stage.name}
              </li>
            ))}
          </ul>
          <h4>Contact:</h4>
          <p>{grievance.contact}</p>
          <h4>Messages:</h4>
          <textarea placeholder="Type your message here..." rows="3"></textarea>
          <button>Send Message</button>
        </div>
      )}
    </div>
  );
};

export default GrievanceCard;
