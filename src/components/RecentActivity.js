import React from "react";

const RecentActivity = () => {
  return (
    <div style={{ backgroundColor: "#FFA726", padding: "20px", borderRadius: "10px", margin: "20px 0" }}>
      <h2 style={{ color: "#fff", marginBottom: "10px" }}>Recent Activity</h2>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li style={{ color: "#fff", marginBottom: "10px" }}>
          ✅ Uploaded File: project.pdf
        </li>
        <li style={{ color: "#fff", marginBottom: "10px" }}>
          ✅ Created NFT: ArtPiece#01
        </li>
        <li style={{ color: "#fff" }}>
          ✅ Transaction: Purchased Insurance Plan
        </li>
      </ul>
    </div>
  );
};

export default RecentActivity;
