import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [userType, setUserType] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (userType === "citizen") {
      // Navigate to Citizen Dashboard
      navigate("/citizen/home");
    } else if (userType === "panchayat-officer") {
      // Navigate to Panchayat Officer Dashboard
      navigate("/panchayat-officer/new-complaints");
    } else {
      alert("Invalid role or not yet implemented.");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <label>
          User Type:
          <select
            value={userType}
            onChange={(e) => setUserType(e.target.value)}
          >
            <option value="">Select</option>
            <option value="citizen">Citizen</option>
            <option value="panchayat-officer">Panchayat Officer</option>
            <option value="water">Water</option>
            <option value="electricity">Electricity</option>
            <option value="road">Road</option>
          </select>
        </label>
        <label>
          User ID/Username:
          <input
            type="text"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Login</button>
        <button type="button">Register</button>
      </form>
    </div>
  );
};

export default Login;
