// components/SuggestionCard.tsx
import { LucideIcon } from "lucide-react";
import React from "react";

interface SuggestionCardProps {
  icon: LucideIcon;
  bgColor?: string;
  title: string;
  subtitle: string;
  text: string;
  iconColor: string;
  textColor: string;
  textColor1: string;
   // optional background color
}

const SuggestionCard: React.FC<SuggestionCardProps> = ({ textColor1,icon:Icon,textColor, bgColor,title,subtitle, text, iconColor }) => {
  return (
    <div
      className={`rounded-lg border flex flex-col p-4 gap-3 items-start ${bgColor || "bg-white"}`}
    >
        <div className="flex items-center gap-1.5">
            <Icon size={20} className={`${iconColor}`} /> 
            <p className={`${textColor} font-medium text-lg`}>{title}</p>
        </div>
        <p className={`${textColor}`}>{subtitle}</p>
        <p className={`${textColor1}`}>{text}</p>
    </div>
  );
};

export default SuggestionCard;
