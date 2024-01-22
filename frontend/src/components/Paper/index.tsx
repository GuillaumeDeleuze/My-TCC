import React from 'react';

interface CustomPaperProps {
  children: React.ReactNode;
}

const CustomPaper: React.FC<CustomPaperProps> = ({ children }) => {
  return (
    <div
      style={{
        backgroundColor: '#fff',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
        padding: '16px',
        marginBottom: '16px'
      }}>
      {children}
    </div>
  );
};

export default CustomPaper;
