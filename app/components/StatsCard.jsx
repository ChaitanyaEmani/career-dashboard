// components/StatsCard.jsx
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const StatsCard = ({ 
  title, 
  value, 
  icon: Icon, 
  bgColor, 
  borderColor, 
  iconColor, 
  iconBgColor 
}) => (
  <Card className={`${bgColor} ${borderColor}`}>
    <CardContent className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
        </div>
        <Icon className={`h-9 w-10 ${iconColor} ${iconBgColor} p-1 rounded`} />
      </div>
    </CardContent>
  </Card>
);

export default StatsCard;