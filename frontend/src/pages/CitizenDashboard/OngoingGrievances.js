import React from "react";
import GrievanceCard from "../../components/GrievanceCard";
import "./OngoingGrievances.css";

const dummyGrievances = [
  {
    id: "GRV12345",
    date: "2024-12-28",
    category: "Water",
    priority: "High",
    description: "Water leakage near main road causing disruption.",
    tracking: [
      { name: "Submitted", completed: true },
      { name: "Endorsed", completed: true },
      { name: "Sent to Officer", completed: false },
      { name: "Resolution in Progress", completed: false },
      { name: "Feedback Collection", completed: false },
      { name: "Resolved", completed: false },
    ],
    contact: "Water Dept: +91 9876543210",
  },
  {
    id: "GRV67890",
    date: "2024-12-27",
    category: "Electricity",
    priority: "Medium",
    description: "Frequent power cuts in residential area.",
    tracking: [
      { name: "Submitted", completed: true },
      { name: "Endorsed", completed: true },
      { name: "Sent to Officer", completed: true },
      { name: "Resolution in Progress", completed: false },
      { name: "Feedback Collection", completed: false },
      { name: "Resolved", completed: false },
    ],
    contact: "Electricity Dept: +91 9876543211",
  },
];

const OngoingGrievances = () => {
  return (
    <div className="ongoing-grievances">
      <h2>Ongoing Grievances</h2>
      <div className="grievances-container">
        {dummyGrievances.map((grievance) => (
          <GrievanceCard key={grievance.id} grievance={grievance} />
        ))}
      </div>
    </div>
  );
};

export default OngoingGrievances;
