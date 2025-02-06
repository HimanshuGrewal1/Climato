import * as React from "react";

export function Card({ children, className, ...props }) {
  return (
    <div className={`border rounded-lg p-4 bg-white shadow-md ${className}`} {...props}>
      {children}
    </div>
  );
}
