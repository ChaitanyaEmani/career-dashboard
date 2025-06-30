import React from "react";

interface ProfileCardsProps {
  left_text: string;
  right_text: string;
  icon: React.ReactNode;
}

const ProfileCards: React.FC<ProfileCardsProps> = ({
  left_text,
  right_text,
  icon,
}) => {
  const capitalizedText =
    left_text.charAt(0).toUpperCase() + left_text.slice(1).toLowerCase();

  return (
    <div className="flex flex-col gap-6 max-w-[550px] min-h-[250px] bg-white rounded-lg p-4 pb-12">
      <div className="flex justify-between pb-4">
        <p className="text-black text-base font-medium">{capitalizedText}</p>
        <p className="text-green-600 text-xs">{right_text}</p>
      </div>
      <div className="flex flex-col gap-2 text-center items-center">
        <div className="text-gray-400">{icon}</div>
        <p className="text-gray-500 text-xs">No {left_text.toLowerCase()} added yet</p>
        <button className="bg-green-800 px-3 py-1.5 text-sm text-white rounded-sm mt-1">
          Add {capitalizedText}
        </button>
      </div>
    </div>
  );
};

export default ProfileCards;
