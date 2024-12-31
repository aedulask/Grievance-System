import React from "react";
import GrievanceForm from "../../components/GrievanceForm";

const FileNewGrievance = () => {
  const handleGrievanceSubmit = (formData) => {
    console.log("New Grievance Submitted:", formData);
    alert("Complaint has been submitted. Check 'Ongoing Grievances' for tracking.");
    // Here you can add logic to send data to the backend or update the state.
  };

  return (
    <div>
      <h2>File a New Grievance</h2>
      <GrievanceForm onSubmit={handleGrievanceSubmit} />
    </div>
  );
};

export default FileNewGrievance;
