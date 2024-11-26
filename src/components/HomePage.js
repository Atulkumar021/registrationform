import React from "react";

function HomePage({ user }) {
  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload(); // Reload to reset logged-in state
  };

  return (
    <div>
      <h2>Welcome, {user.name}!</h2>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <p>
        <strong>Mobile:</strong> {user.mobile}
      </p>
      <p>
        <strong>Address:</strong> {user.address}
      </p>
      <p>
        <strong>Date of Birth:</strong> {user.dob}
      </p>
      <p>
        <strong>Gender:</strong> {user.gender}
      </p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default HomePage;
