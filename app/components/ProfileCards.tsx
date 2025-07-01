import React from "react";
import { LucideIcon } from "lucide-react";

interface ProfileCardsProps {
  left_text: string;
  right_text: string;
  icon: LucideIcon;
  text: string;
  btnText: string;
}

const ProfileCards: React.FC<ProfileCardsProps> = ({
  left_text,
  right_text,
  icon:Icon,
  text,
  btnText,

}) => {
  
  return (
    <div className="flex flex-col p-4 border-1 bg-white rounded-lg">
      <div className="flex justify-between">
        <p className="text-gray-800 text-md font-semibold">{left_text}</p>
        <p className="text-green-800">{right_text}</p>
      </div>
      <div className="flex flex-col gap-3 items-center py-14">
        <Icon size={20} className="text-gray-500"/>
        <p className="text-gray-500">No {text} added yet</p>
        <button className="px-3 py-1 bg-green-800 text-white rounded-sm" >Add {btnText}</button>
      </div>
    </div>
  );
};

export default ProfileCards;
