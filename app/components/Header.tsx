import React from "react";

type HeaderProps = {
  userName: string;
  text?: string; // Optional, since some pages may not use it
};

const Header: React.FC<HeaderProps> = ({ userName, text }) => {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{userName}</h1>
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  );
};

export default Header;
