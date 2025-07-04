"use client"

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

// Define the expected shape of each data point
type LearningAnalyticsData = {
  month: string;
  difference: number;
  courses: number;
};

type LearningAnalyticsProps = {
  data: LearningAnalyticsData[];
  text1: string;
  text2: string;
};

const LearningAnalytics: React.FC<LearningAnalyticsProps> = ({ data, text1, text2 }) => (
  <div>
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
            stroke="#22c55e"
            fill="#bbf7d0"
            strokeWidth={3}
            name={text2}
            dot={true}
          />
          <Area
            type="monotone"
            dataKey="courses"
            stroke="#3b82f6"
            fill="#bfdbfe"
            strokeWidth={3}
            name={text1}
            dot={true}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>

    <div className="flex items-center justify-center gap-8 mt-4">
      <div className="flex items-center gap-2">
        <div className="w-4 h-2 border-2 bg-blue-100 border-blue-800" />
        <span className="text-md text-gray-600">{text1}</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-2 border-2 bg-green-100 border-green-800" />
        <span className="text-md text-gray-600">{text2}</span>
      </div>
    </div>
  </div>
);

export default LearningAnalytics;
