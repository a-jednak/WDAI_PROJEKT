// Register.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Updated to useNavigate

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here, you'd typically send data to the backend. For now, we simulate registration.
    if (username && email && password) {
      alert("Account created successfully!");
      navigate("/profile"); // Navigate to the profile page after successful registration
    }
  };

  return (
    <div>
      <h1 style={{ margin: "100px 20px 20px 0px" }}>Register</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
