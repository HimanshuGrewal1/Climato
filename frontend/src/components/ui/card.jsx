// src/components/ui/card.jsx
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="p-4 border rounded shadow">
      {children}
    </div>
  );
};

export default Card;
