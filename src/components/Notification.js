import React from "react";

const Notification = () => {
  return (
    <div style={{ backgroundColor: "#FFA726", padding: "20px", borderRadius: "10px", marginTop: "20px" }}>
      <h2 style={{ color: "#fff", marginBottom: "10px" }}>Notifications</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ color: "#fff", marginBottom: "10px" }}>
          🔔 Your insurance plan is due for renewal.
        </li>
        <li style={{ color: "#fff" }}>
          🔔 New scholarship opportunity available.
        </li>
      </ul>
    </div>
  );
};

export default Notification;
