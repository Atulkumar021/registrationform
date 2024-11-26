import React, { useState } from "react";

function Signin() {
  const [formData, setFormData] = useState({ email: "", mobile: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (user) =>
        user.email === formData.email && user.mobile === formData.mobile
    );

    if (!user) {
      setError("Invalid email or mobile number");
      return;
    }

    // Store logged-in user in localStorage
    localStorage.setItem("loggedInUser", JSON.stringify(user));
    setSuccess("Sign-in successful!");
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <br />
        <input
          type="text"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}

export default Signin;
