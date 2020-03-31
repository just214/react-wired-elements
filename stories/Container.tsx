import React from 'react';

export const Container: React.FC = ({ children }) => {
  return (
    <div
      style={{
        maxWidth: '90%',
        margin: '0 auto',

        padding: '10px',
      }}
    >
      {children}
    </div>
  );
};
