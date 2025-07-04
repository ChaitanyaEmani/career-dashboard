import React from "react";
import { LucideIcon } from "lucide-react";

interface InfoBoxProps {
  title: string;
  subtitle?: React.ReactNode;
  btn1: string;
  btn2?: string;
  icon?: LucideIcon; // made optional
  btn1Click?: () => void;
  bgColor: string;
  bgColor1?: string;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  btn1,
  btn2,
  subtitle,
  title,
  icon: Icon,
  btn1Click,
  bgColor,
  bgColor1
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-4 bg-white rounded-lg p-4 w-full">
      {/* Left section */}
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
      </div>

      {/* Right buttons */}
      <div className="flex sm:flex-row gap-2 sm:items-center">
        <button
          onClick={btn1Click}
          className={`${bgColor} text-white flex gap-1.5 text-base h-10 px-4 items-center justify-center rounded-lg`}
        >
          {Icon && <Icon className="w-4 h-4" />}
          {btn1}
        </button>

        {btn2 && (
          <button className={`${bgColor1} hover:bg-gray-700 text-white text-sm px-4 py-2 rounded`}>
            {btn2}
          </button>
        )}
      </div>
    </div>
  );
};

export default InfoBox;
