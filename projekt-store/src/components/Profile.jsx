// Profile.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State for logged-in user
  const [user, setUser] = useState(null); // Stores user details after login

  // Simulate a user login function
  const handleLogin = (username) => {
    setIsLoggedIn(true);
    setUser({ username });
  };

  // Simulate a user logout function
  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Profile</h1>

      {/* If user is logged in, show profile details, otherwise show login option */}
      {isLoggedIn ? (
        <div>
          <p>Welcome, {user.username}!</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <Login onLogin={handleLogin} />
          <p>
            Don't have an account? <Link to="/register">Register here</Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Profile;
