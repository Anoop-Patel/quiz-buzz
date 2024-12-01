import React from "react";

const Navbar = ({ onLogout }) => {
  const userData = JSON.parse(localStorage.getItem("userRole"));

  const handleLogout = () => {
    localStorage.clear();
    onLogout(null); 
  };

  if (!userData) {
    return null;
  }

  return (
    <div className="navbar">
      <span className="name">Welcome, {userData.name}</span>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
