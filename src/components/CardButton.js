import React from 'react';

const CardButton = ({ label, onClick }) => {
  return (
    <button className="card-button" onClick={onClick}>
      {label}
    </button>
  );
};

export default CardButton;
