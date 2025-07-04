import React from "react";

type HeaderProps = {
  userName: string;
  text?: string; // Optional, since some pages may not use it
};

const Header: React.FC<HeaderProps> = ({ userName, text }) => {
  
  const capitalizedName = userName.split(" ").map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{capitalizedName}</h1>
      {text && <p className="text-gray-600">{text}</p>}
    </div>
  );
};

export default Header;
