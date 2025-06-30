import React from "react";

type JobCardProps = {
  title: string;
  company: string;
  salary: string;
  posted: string;
};

const JobCard: React.FC<JobCardProps> = ({ title, company, salary, posted }) => (
  <div className="p-4 border border-gray-200 rounded-lg">
    <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
    <p className="text-sm text-gray-600 mb-2">{company}</p>
    <div className="flex justify-between items-center">
      <span className="font-medium text-green-600">{salary}</span>
      <span className="text-xs text-gray-500">{posted}</span>
    </div>
  </div>
);

export default JobCard;
