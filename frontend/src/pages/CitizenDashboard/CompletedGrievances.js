import React from "react";
import GrievanceCard from "../../components/GrievanceCard";
import "./CompletedGrievances.css";

const dummyCompletedGrievances = [
  {
    id: "GRV11111",
    date: "2024-12-20",
    category: "Road",
    priority: "Low",
    description: "Potholes in the main street were filled.",
    tracking: [
      { name: "Submitted", completed: true },
      { name: "Endorsed", completed: true },
      { name: "Sent to Officer", completed: true },
      { name: "Resolution in Progress", completed: true },
      { name: "Feedback Collection", completed: true },
      { name: "Resolved", completed: true },
    ],
    contact: "Road Dept: +91 9876543220",
  },
  {
    id: "GRV22222",
    date: "2024-12-18",
    category: "Electricity",
    priority: "Medium",
    description: "Transformer repair completed in residential area.",
    tracking: [
      { name: "Submitted", completed: true },
      { name: "Endorsed", completed: true },
      { name: "Sent to Officer", completed: true },
      { name: "Resolution in Progress", completed: true },
      { name: "Feedback Collection", completed: true },
      { name: "Resolved", completed: true },
    ],
    contact: "Electricity Dept: +91 9876543211",
  },
];

const CompletedGrievances = () => {
  return (
    <div className="completed-grievances">
      <h2>Completed Grievances</h2>
      <div className="grievances-container">
        {dummyCompletedGrievances.map((grievance) => (
          <GrievanceCard key={grievance.id} grievance={grievance} />
        ))}
      </div>
    </div>
  );
};

export default CompletedGrievances;
