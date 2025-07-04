// components/HeaderBox.tsx
import { LucideIcon } from "lucide-react";
import React from "react";

interface HeaderBoxProps {
  icon: LucideIcon;
  text1: string;
  text2: string;
  btn1?: string;
  btn2?: string;
  btn3?: string;
  bgColor: string;
  borderColor: string;
  iconbgColor: string;
  textColor: string;
  btnbgColor: string;
  textbtnColor?: string;
  children?: React.ReactNode;
  iconTextColor?: string;
}

const HeaderBox: React.FC<HeaderBoxProps> = ({
  icon: Icon,
  text1,
  text2,
  btn1,
  btn2,
  btn3,
  textbtnColor,
  bgColor,
  iconbgColor,
  textColor,
  borderColor,
  btnbgColor,
  children,
  iconTextColor
}) => {
  return (
    <div className={`flex flex-col gap-4 ${bgColor} border-2 ${borderColor} p-5 rounded-lg`}>
      <div className="flex gap-3 items-start">
        <Icon size={46} className={`p-2 ${iconTextColor} ${iconbgColor} font-bold rounded-md`} />
        <div className="flex flex-col gap-2">
          <p className={`text-lg font-medium ${textColor}`}>{text1}</p>
          <p className={`${textColor} text-md`}>{text2}</p>
          {(btn1 || btn2 || btn3) && (
            <div className="flex gap-3 flex-wrap">
              {btn1 && (
                <button className={`${textColor} ${textbtnColor} ${btnbgColor} px-2 py-1 rounded-lg`}>{btn1}</button>
              )}
              {btn2 && (
                <button className={`${textColor} ${btnbgColor} px-2 py-1 rounded-lg`}>{btn2}</button>
              )}
              {btn3 && (
                <button className={`${textColor} ${btnbgColor} px-2 py-1 rounded-lg`}>{btn3}</button>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Render children if present */}
      {children && <div className="py-4">{children}</div>}
    </div>
  );
};

export default HeaderBox;
