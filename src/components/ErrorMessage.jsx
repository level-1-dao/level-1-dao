import React from 'react';

const ErrorMessage = ({ children }) => (
  <div color="danger" fade={false} data-testid="error">
    {children}
  </div>
);

export default ErrorMessage;