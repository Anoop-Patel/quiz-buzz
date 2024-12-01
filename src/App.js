import React, { useEffect, useState } from "react";
import Login from "./component/Login";
import AdminHome from "./page/admin";
import UserHome from "./page/user";
import Navbar from "./component/Navbar";

function App() {
  const [role, setRole] = useState(null);

  useEffect(() => {
    const userRole = localStorage.getItem("userRole");
    if (userRole) {
      const { role } = JSON.parse(userRole);
      setRole(role);
    } else {
      setRole(null);
    }
  }, []);

  const handleRoleChange = (newRole) => {
    setRole(newRole);
  };

  if (!role) {
    return <Login onRoleChange={handleRoleChange} />;
  }

  return (
    <div className="App">
      <Navbar onLogout={handleRoleChange} />
      {role === "admin" ? <AdminHome /> : <UserHome />}
    </div>
  );
}

export default App;
