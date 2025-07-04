import React from "react";

type ActivityItemProps = {
  title: string;
  time: string;
  color?: "blue" | "green" | "purple" | "orange" | "gray" | "red" | "yellow";
};

const ActivityItem: React.FC<ActivityItemProps> = ({
  title,
  time,
  color = "gray",
}) => {
  const dotColorClass =
    color === "blue"
      ? "bg-blue-500"
      : color === "green"
      ? "bg-green-500"
      : color === "purple"
      ? "bg-purple-500"
      : color === "orange"
      ? "bg-orange-500"
      : color === "red"
      ? "bg-red-500"
      : color==="yellow"
      ? "bg-yellow-500"
      : "bg-gray-500";

  return (
    <div className="flex items-start space-x-3">
      <div className={`w-2 h-2 rounded-full mt-2 ${dotColorClass}`} />
      <div className="flex-1">
        <p className="text-sm font-medium text-gray-700">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{time}</p>
      </div>
    </div>
  );
};

export default ActivityItem;
