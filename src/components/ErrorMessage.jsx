// src/components/ErrorMessage.jsx

import React from "react";

/**
 * Error or empty state message.
 * @param {{ message: string }} props
 * @returns {JSX.Element} Error message display.
 */
export default function ErrorMessage({ message }) {
  return (
    <div className="error-message">
      <p>{message}</p>
    </div>
  );
}
