// components/ActivityItem.jsx
import React from "react";

const ActivityItem = ({ title, time, color }) => (
  <div className="flex items-start space-x-3">
    <div
      className={`w-2 h-2 rounded-full mt-2 ${
        color === "blue"
          ? "bg-blue-500"
          : color === "green"
          ? "bg-green-500"
          : color === "purple"
          ? "bg-purple-500"
          : color === "orange"
          ? "bg-orange-500"
          : "bg-gray-500"
      }`}
    />
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="text-xs text-gray-500 mt-1">{time}</p>
    </div>
  </div>
);

export default ActivityItem;