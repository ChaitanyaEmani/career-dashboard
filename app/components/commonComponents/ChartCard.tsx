import React from "react";

type ChartCardProps = {
  title: string;
  viewAllText?: string;
  onViewAll?: () => void;
};

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  viewAllText,
  onViewAll,
}) => (
  <div>
    <div className="flex flex-row items-center justify-between">
      <div className="text-md font-semibold">{title}</div>
      {viewAllText && (
        <div className="text-blue-600 text-xs p-0" onClick={onViewAll}>
          {viewAllText}
        </div>
      )}
    </div>
    {/* <CardContent>{children}</CardContent> */}
  </div>
);

export default ChartCard;
