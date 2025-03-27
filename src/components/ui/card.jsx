import React from 'react';
import './card.css';

export const Card = ({ children, className }) => {
  return (
    <div className={`custom-card ${className || ''}`}>
      {children}
    </div>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={`custom-card-content ${className || ''}`}>
      {children}
    </div>
  );
};