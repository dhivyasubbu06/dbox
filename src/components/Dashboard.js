import React from 'react';
import { useNavigate } from 'react-router-dom';
import RecentActivity from './RecentActivity';
import Notification from './Notification';
import CardButton from './CardButton';

const Dashboard = () => {
  const navigate = useNavigate();

  const goToFileUpload = () => {
    navigate('/file-upload');  // Navigate to the File Upload page
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <RecentActivity />
      <div className="card-grid">
        <CardButton label="Upload File" onClick={goToFileUpload} />  {/* Navigate on click */}
        <CardButton label="View NFTs" />
        <CardButton label="Marketplace" />
        <CardButton label="Insurance & Scholarships" />
      </div>
      <Notification />
    </div>
  );
};

export default Dashboard;
