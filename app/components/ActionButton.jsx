// components/ActionButton.jsx
import React from "react";
import { Button } from "@/components/ui/button";

const ActionButton = ({ 
  icon: Icon, 
  text, 
  bgColor, 
  borderColor, 
  textColor, 
  onClick 
}) => (
  <Button
    className={`w-full ${bgColor} justify-start border ${borderColor} ${textColor} font-medium`}
    variant="outline"
    onClick={onClick}
  >
    <Icon className="w-4 h-4 mr-2" />
    {text}
  </Button>
);

export default ActionButton;