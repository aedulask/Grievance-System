import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Grievance System</div>
      <div className="icons">
        <i className="fas fa-user-circle"></i>
        <i className="fas fa-cog"></i>
      </div>
    </header>
  );
};

export default Header;
