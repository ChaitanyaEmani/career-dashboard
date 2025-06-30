import React from "react";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

type ActionButtonProps = {
  icon: LucideIcon;
  text: string;
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  onClick?: () => void;
};

const ActionButton: React.FC<ActionButtonProps> = ({
  icon: Icon,
  text,
  bgColor = "",
  borderColor = "",
  textColor = "",
  onClick,
}) => (
  <Button
    className={`w-full justify-start border font-medium ${bgColor} ${borderColor} ${textColor}`}
    variant="outline"
    onClick={onClick}
  >
    <Icon className="w-4 h-4 mr-2" />
    {text}
  </Button>
);

export default ActionButton;
