import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Registration from "./components/Registration";
import SignIn from "./components/Signin";
import HomePage from "./components/HomePage";

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <Router>
      <div>
        <h1>User Authentication App</h1>
        <Routes>
          {loggedInUser ? (
            <Route path="/" element={<HomePage user={loggedInUser} />} />
          ) : (
            <Route path="/" element={<Navigate to="/register" />} />
          )}
          <Route path="/register" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
