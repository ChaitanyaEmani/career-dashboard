import React from "react";
import { CloudUpload } from "lucide-react";

const UploadResume: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 bg-[#0f172a66] flex items-center justify-center px-4 sm:px-6">
      {/* Modal Box */}
      <div className="bg-white rounded-lg w-full max-w-[1000px] h-auto shadow-lg p-4 sm:p-6">
        {/* Header */}
        <div className="flex justify-between items-center pb-4">
          <p className="text-lg font-semibold text-gray-800">Quick Setup</p>
          <button
            onClick={onClose}
            className="bg-red-200 text-red-600 px-3 py-1 rounded hover:bg-red-300"
          >
            Close
          </button>
        </div>

        {/* Body */}
        <div className="flex flex-col items-center text-center space-y-4 border-2 border-dotted border-gray-200 rounded-lg px-4 sm:px-10 py-6">
          <CloudUpload className="w-10 h-10 text-gray-400" />

          <p className="text-base sm:text-md font-semibold text-gray-700">
            Upload Your Resume
          </p>
          <p className="text-sm text-gray-500 max-w-md">
            Auto-fill your profile sections from your existing resume
          </p>

          <button className="bg-green-900 text-white px-5 py-2 rounded hover:bg-green-800">
            Choose File
          </button>

          <p className="text-xs text-gray-400">
            Supports PDF, DOC, DOCX (Max 5MB)
          </p>
        </div>
      </div>
    </div>
  );
};

export default UploadResume;
