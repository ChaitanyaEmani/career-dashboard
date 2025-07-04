import React, { useState } from "react";
import UploadResume from "./profileComponents/UploadResume";
import { LucideIcon } from "lucide-react";

interface InfoBoxProps {
  title: string;
  subtitle?: string;
  btn1: string;
  btn2?: string;
  icon: LucideIcon;
}

const InfoBox: React.FC<InfoBoxProps> = ({
  btn1,
  btn2,
  subtitle,
  title,
  icon: Icon,
 
}) => {
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between gap-4 bg-white rounded-lg p-4 w-full">
        {/* Left section */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold text-gray-800">{title}</p>
          {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
        </div>

        {/* Right buttons */}
        <div className="flex flex-col sm:flex-row  gap-2 sm:items-center">
          <button
            onClick={() => setShowUpload(true)}
            className="bg-green-800 text-white flex gap-1.5 text-base h-10 px-4 items-center justify-center rounded-lg"
          >
            <Icon className="w-4 h-4" />
            {btn1}
          </button>

          {btn2 && (
            <button className="bg-gray-900 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded">
              {btn2}
            </button>
          )}
        </div>
      </div>

      {/* Modal */}
      {showUpload && <UploadResume onClose={() => setShowUpload(false)} />}
    </>
  );
};

export default InfoBox;
