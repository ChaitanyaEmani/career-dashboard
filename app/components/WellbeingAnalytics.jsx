// components/WellbeingAnalytics.jsx
import React from "react";
import {
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Tooltip,
} from "recharts";
import ChartCard from "./ChartCard";

const WellbeingAnalytics = ({ data }) => (
  <ChartCard 
    title="Wellbeing Analytics" 
    viewAllText="View Details"
    onViewAll={() => console.log("View wellbeing details")}
  >
    <div className="h-48 flex items-center justify-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={40}
            outerRadius={70}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
    <div className="flex items-center justify-center gap-2 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-green-800 rounded-lg"></div>
        <span className="text-md text-gray-600">Excellent</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-blue-800 rounded-lg"></div>
        <span className="text-md text-gray-600">Good</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-amber-500 rounded-lg"></div>
        <span className="text-md text-gray-600">Fair</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 bg-red-600 rounded-lg"></div>
        <span className="text-md text-gray-600">Poor</span>
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Meditation Streak</span>
        <span className="font-medium">7 days</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Average Mood</span>
        <span className="font-medium">8.2/10</span>
      </div>
      <div className="flex justify-between text-sm">
        <span>Stress Level</span>
        <span className="font-medium text-green-600">Low</span>
      </div>
    </div>
  </ChartCard>
);

export default WellbeingAnalytics;