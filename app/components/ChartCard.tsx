import React, { ReactNode } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ChartCardProps = {
  title: string;
  viewAllText?: string;
  children: ReactNode;
  onViewAll?: () => void;
};

const ChartCard: React.FC<ChartCardProps> = ({
  title,
  viewAllText,
  children,
  onViewAll,
}) => (
  <Card>
    <CardHeader className="flex flex-row items-center justify-between">
      <CardTitle className="text-lg font-semibold">{title}</CardTitle>
      {viewAllText && (
        <Button
          variant="link"
          className="text-blue-600 text-sm p-0"
          onClick={onViewAll}
        >
          {viewAllText}
        </Button>
      )}
    </CardHeader>
    <CardContent>{children}</CardContent>
  </Card>
);

export default ChartCard;
