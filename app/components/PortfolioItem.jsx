// components/PortfolioItem.jsx
import React from "react";

const PortfolioItem = ({ 
  title, 
  status, 
  icon: Icon, 
  bgColor, 
  borderColor, 
  textColor 
}) => (
  <div className={`flex items-center justify-between p-3 ${bgColor} border ${borderColor} rounded-lg`}>
    <span className={`flex ${textColor} gap-2`}>
      <Icon size={20} className={textColor} />
      <p>{title}</p>
    </span>
    <p className={`${textColor} font-semibold`}>{status}</p>
  </div>
);

export default PortfolioItem;