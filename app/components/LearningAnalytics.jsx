// components/LearningAnalytics.jsx
import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
} from "recharts";
import ChartCard from "./ChartCard";

const LearningAnalytics = ({ data }) => (
  <ChartCard 
    title="Learning Analytics" 
    viewAllText="View All"
    onViewAll={() => console.log("View all learning analytics")}
  >
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: "#666" }}
          />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="difference"
            stackId="1"
            stroke="#10b981"
            fill="#d1fae5"
            strokeWidth={3}
            name="Study Hours"
          />
          <Area
            type="monotone"
            dataKey="courses"
            stroke="#1e3a8a"
            fill="#bfdbfe"
            strokeWidth={3}
            name="Courses Completed"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    <div className="flex items-center justify-center gap-8 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-2 border-2 bg-blue-100 border-blue-800 py-2 px-6"></div>
        <span className="text-md text-gray-600">Courses Completed</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-2 border-2 bg-green-100 border-green-800 py-2 px-6"></div>
        <span className="text-md text-gray-600">Study Hours</span>
      </div>
    </div>
  </ChartCard>
);

export default LearningAnalytics;