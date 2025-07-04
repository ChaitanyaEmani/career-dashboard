import React from "react";

interface ProfileSectionCardProps {
  category: "education" | "experience" | "certification";
  title: string;
  subtitle: string;
  startYear?: number;
  endYear?: number;
  grade?: string;
  desc?: string;
}

const ProfileSectionCard: React.FC<ProfileSectionCardProps> = ({
  category,
  title,
  subtitle,
  startYear,
  endYear,
  grade,
  desc,
}) => {
  const renderDetails = () => {
    switch (category) {
      case "education":
        return (
          <div className="text-sm text-gray-500 flex gap-2">
            <span>{startYear} - {endYear}</span>
            {grade && (
              <>
                <div className="bg-gray-500 w-1.5 h-1.5 mt-2 rounded-full" />
                <span>GPA: {grade}</span>
              </>
            )}
          </div>
        );
      case "experience":
        return (
          <>
            <p className="text-sm text-gray-500">{startYear} - {endYear}</p>
            {desc && <p className="text-sm text-gray-700 mt-1">{desc}</p>}
          </>
        );
      case "certification":
        return (
          <>
            <p className="text-sm text-gray-500">Issued: {startYear}</p>
            {desc && <p className="text-sm text-gray-700 mt-1">{desc}</p>}
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-1">
      <p className="text-base font-semibold text-gray-900">{title}</p>
      <p className="text-sm text-gray-600">{subtitle}</p>
      {renderDetails()}
    </div>
  );
};

export default ProfileSectionCard;
