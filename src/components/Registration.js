import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Registration() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    address: "",
    dob: "",
    gender: "",
  });

  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook for navigation

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email or mobile is already registered
    const isEmailExist = users.some((user) => user.email === formData.email);
    const isMobileExist = users.some((user) => user.mobile === formData.mobile);

    if (isEmailExist) {
      setError("Email already exists");
      return;
    }
    if (isMobileExist) {
      setError("Mobile number already exists");
      return;
    }

    // Add new user to localStorage
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", JSON.stringify(formData)); // Log the user in

    // Redirect to HomePage
    navigate("/");
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br />
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
        <textarea
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        ></textarea>
        <br />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
        />
        <br />
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Registration;
