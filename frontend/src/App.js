import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import CitizenNav from "./components/CitizenNav";
import CitizenHome from "./pages/CitizenDashboard/CitizenHome";
import OngoingGrievances from "./pages/CitizenDashboard/OngoingGrievances";
import CompletedGrievances from "./pages/CitizenDashboard/CompletedGrievances";
import FileGrievance from "./pages/CitizenDashboard/FileGrievance";
import Help from "./pages/CitizenDashboard/Help";
import OfficerNav from "./components/OfficerNav"; // Navbar for Panchayat Officer
import NewComplaints from "./pages/PanchayatDashboard/NewComplaints";
import OngoingComplaints from "./pages/PanchayatDashboard/OngoingComplaints";
import CompletedComplaints from "./pages/PanchayatDashboard/CompletedComplaints";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />

        {/* Routes for Citizen Dashboard */}
        <Route
          path="/citizen/*"
          element={
            <>
              <CitizenNav />
              <Routes>
                <Route path="home" element={<CitizenHome />} />
                <Route path="ongoing" element={<OngoingGrievances />} />
                <Route path="completed" element={<CompletedGrievances />} />
                <Route path="file-grievance" element={<FileGrievance />} />
                <Route path="help" element={<Help />} />
              </Routes>
            </>
          }
        />

        {/* Routes for Panchayat Officer Dashboard */}
        <Route
          path="/panchayat-officer/*"
          element={
            <>
              <OfficerNav />
              <Routes>
                <Route path="new-complaints" element={<NewComplaints />} />
                <Route path="ongoing-complaints" element={<OngoingComplaints />} />
                <Route path="completed-complaints" element={<CompletedComplaints />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
