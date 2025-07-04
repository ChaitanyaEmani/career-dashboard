import React from 'react';
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value?: string | number;
  icon: LucideIcon;
  bgColor?: string;         
  textColor?:string;
  subtitle?: string;
  category: string;
}

const StatsCard: React.FC<StatsCardProps> = ({ title,subtitle, category, value, icon: Icon, bgColor, textColor}) => {
  return (
    <div className={`flex ${category==="dashboard"?"justify-between":"flex-row-reverse justify-center gap-1"} py-3.5 px-3 border bg-white rounded-lg`}>
      <div className='flex flex-col'>
        <p className={`${category==="dashboard"?"text-gray-600 font-medium text-sm":"font-medium text-sm"}`}>{title}</p>
        {value && <p className="text-xl font-bold text-gray-900">{value}</p>}
        {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
      </div>
      <div>
        <Icon size={20} className={`w-9 h-9 p-1.5 ${bgColor} ${textColor} rounded-sm`} />
      </div>
    </div>
  );
};

export default StatsCard;
