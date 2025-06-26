// ProfileCompletionAlert.jsx
import React from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { AlertTriangle } from "lucide-react";

const ProfileCompletionAlert = ({title, description, completionPercentage}) => {

    

  return (
    <Alert className="mb-8 border-yellow-200 bg-yellow-50">
      <AlertDescription>
        <div className="flex items-start gap-3 mb-3">
          <AlertTriangle size={20} className="text-yellow-600" />
          <div className="flex flex-col gap-1">
            <span className="font-medium text-yellow-800">
              {title}
            </span>
            <p className="text-yellow-700 mb-3">
              {description}
            </p>
            <div className="w-[280px] sm:w-[400px] md:w-[750px] lg:w-[1100px] xl:w-[1130px] h-2 bg-yellow-200 rounded">
              <div
                className="h-full bg-amber-800 rounded"
                style={{ width: `${completionPercentage}%` }}
              />
            </div>
          </div>
        </div>
      </AlertDescription>
    </Alert>
  );
};

export default ProfileCompletionAlert;