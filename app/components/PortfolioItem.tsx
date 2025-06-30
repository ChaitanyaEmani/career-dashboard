import React from "react";
import { LucideIcon } from "lucide-react";

interface PortfolioItemProps {
  title: string;
  status: string;
  icon: LucideIcon;
  bgColor?: string;       // Tailwind class like "bg-white"
  borderColor?: string;   // Tailwind class like "border-gray-200"
  textColor?: string;     // Tailwind class like "text-gray-700"
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({
  title,
  status,
  icon: Icon,
  bgColor = "bg-white",
  borderColor = "border-gray-200",
  textColor = "text-gray-800",
}) => {
  return (
    <div
      className={`flex items-center justify-between p-3 ${bgColor} border ${borderColor} rounded-lg`}
    >
      <span className={`flex items-center gap-2 ${textColor}`}>
        <Icon size={20} className={textColor} />
        <p>{title}</p>
      </span>
      <p className={`${textColor} font-semibold`}>{status}</p>
    </div>
  );
};

export default PortfolioItem;
