// Header.jsx
import React from "react";

const Header = ({ userName}) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">
        Morning, {userName}
      </h1>
      <p className="text-gray-600">
        Welcome back! Here's your career development overview.
      </p>
    </div>
  );
};

export default Header;