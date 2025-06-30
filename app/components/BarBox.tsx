import React from "react";
import { Clock } from "lucide-react";

type BarBoxProps = {
  icon?: React.ReactNode;
  title: string;
  desc?: string;
  value?: string;
  completionPercentage?: number;
  buttonNames?: string[];
  bgColor?: string;
  borderColor?: string;
};

const BarBox: React.FC<BarBoxProps> = ({
  icon,
  title,
  desc,
  value,
  completionPercentage = 0,
  buttonNames = [],
  bgColor = "bg-white",
  borderColor = "border-white",
}) => {
  const isIconMode = !!icon;

  return (
    <div
      className={`flex flex-col justify-center p-4 ${bgColor} rounded-lg border-2 ${borderColor} space-y-4 mb-6`}
    >
      {/* Header Section */}
      <div>
        {isIconMode ? (
          <div className="flex items-start justify-center gap-3">
            <div className="text-xl">{icon}</div>
            <div className="flex flex-col w-full">
              <h2 className="text-lg font-semibold text-amber-700">{title}</h2>
              {desc && <p className="text-base text-amber-600">{desc}</p>}

              {/* Progress Bar */}
              <div className="mt-2 pr-6">
                <div className="h-2 rounded bg-yellow-200 w-full max-w-[95%]">
                  <div
                    className="h-full bg-amber-600 rounded transition-all duration-500"
                    style={{ width: `${completionPercentage}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-2 w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
              <p className="text-2xl font-bold text-gray-900">{value}</p>
            </div>

            {/* Progress Bar */}
            <div className="pr-6">
              <div className="h-2 rounded bg-gray-300 w-full">
                <div
                  className="h-full bg-green-600 rounded transition-all duration-500"
                  style={{ width: `${completionPercentage}%` }}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Button Chips */}
      {buttonNames.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2">
          {buttonNames.map((btnName, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-3 py-1 rounded"
            >
              <div className="w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center">
                <Clock className="w-4 h-4 text-white" />
              </div>
              <p className="text-sm text-gray-700">{btnName}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BarBox;
