import React from 'react';
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  bgColor?: string;         
  textColor?:string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon: Icon, bgColor, textColor}) => {
  return (
    <div className="flex justify-between items-center py-3.5 px-3 border-1 bg-white rounded-lg">
      <div className='flex flex-col'>
        <p className="text-gray-600 font-medium text-md">{title}</p>
        <p className="text-xl font-bold text-gray-900">{value}</p>
      </div>
      <div className="">
        <Icon size={20} className={`w-9 h-9 p-1.5 ${bgColor} ${textColor} rounded-sm`} />
      </div>
    </div>
  );
};

export default StatsCard;
