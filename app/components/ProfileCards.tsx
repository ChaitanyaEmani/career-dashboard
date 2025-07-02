"use client";

import React, { useState } from "react";
import { LucideIcon } from "lucide-react";

interface BasicDetails {
  firstName?: string;
  lastName?: string;
  phone?: string;
  bio?: string;
  email?: string;
  professionalTitle?: string;
  location?: string;
}

interface Education {
  degree?: string;
  institution?: string;
  startDate?: string;
  endDate?: string;
  grade?: string;
}

interface WorkExperience {
  jobTitle?: string;
  company?: string;
  startDate?: string;
  endDate?: string;
  task?: string;
}

interface Project {
  name?: string;
  description?: string;
  technologies?: string;
  projectUrl?: string;
  githubUrl?: string;
}

type Skill = string | { name?: string };

interface Language {
  language?: string;
  proficiency?: string;
}

interface Certification {
  name?: string;
  issuer?: string;
  abstract?: string;
}

interface Link {
  platform?: string;
  url?: string;
}

type ProfileData =
  | BasicDetails
  | Education[]
  | WorkExperience[]
  | Project[]
  | Skill[]
  | Language[]
  | Certification[]
  | Link[];

interface ProfileCardsProps {
  left_text: string;
  right_text: string;
  icon: LucideIcon;
  text: string;
  btnText: string;
  onAddClick: () => void;
  data?: ProfileData;
  onEditClick?: (item: any, section: string, index: number) => void;
}

const ProfileCards: React.FC<ProfileCardsProps> = ({
  left_text,
  right_text,
  icon: Icon,
  text,
  btnText,
  onAddClick,
  data,
  onEditClick,
}) => {
  const isDataEmpty =
    !data ||
    (Array.isArray(data) && data.length === 0) ||
    (typeof data === "object" &&
      !Array.isArray(data) &&
      Object.keys(data).length === 0);

  const [activeIndices, setActiveIndices] = useState<{ [key: string]: number }>(
    {
      education: 0,
      "work experience": 0,
      certifications: 0,
    }
  );

  const handleSetActive = (section: string, index: number) => {
    setActiveIndices((prev) => ({ ...prev, [section]: index }));
  };

  return (
    <div className="flex flex-col p-4 border bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <p className="text-gray-800 text-md font-semibold">{left_text}</p>
        <p
          className="text-green-800 cursor-pointer hover:underline text-sm font-medium"
          onClick={onAddClick}
        >
          {right_text}
        </p>
      </div>

      {isDataEmpty ? (
        <div className="flex flex-col gap-3 items-center py-14 text-center">
          <Icon size={24} className="text-gray-400" />
          <p className="text-gray-500">No {text} added yet.</p>
          <button
            className="px-4 py-2 bg-green-700 text-white rounded-md"
            onClick={onAddClick}
          >
            Add {btnText}
          </button>
        </div>
      ) : (
        <div className="mt-2 text-gray-700">
          {/* Basic Details */}
          {text === "basic details" && data && !Array.isArray(data) && (
            <div className="flex flex-col gap-3">
              <div className="flex items-start gap-4">
                <div className="w-21 h-21 text-3xl rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                  {((data as BasicDetails).firstName?.charAt(0) || "") +
                    ((data as BasicDetails).lastName?.charAt(0) || "")}
                </div>
                <div className="flex flex-col text-gray-800">
                  <p className="text-lg font-semibold text-gray-900">
                    {(data as BasicDetails).firstName}{" "}
                    {(data as BasicDetails).lastName}
                  </p>

                  <p className="text-lg text-gray-500">
                    {(data as BasicDetails).professionalTitle}
                  </p>
                  <p className="text-lg text-gray-500">
                    {(data as BasicDetails).location}
                  </p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="text-md flex flex-col text-gray-700 min-w-[180px] ">
                  <span className="text-gray-400">Email:</span> {(data as BasicDetails).email}
                </p>
                <p className="text-md flex flex-col text-gray-700 min-w-[180px]">
                  <span className="text-gray-400">Phone:</span>  {(data as BasicDetails).phone}
                </p>
                
              </div>
              {(data as BasicDetails).bio && (
                  <p className="mt-1 text-sm bg-gray-200 p-2 rounded-sm text-gray-700">
                    {(data as BasicDetails).bio}
                  </p>
                )}
            </div>
          )}

          {/* Education */}
          {text === "education" &&
            Array.isArray(data) &&
            (data as Education[]).map((edu, idx) => {
              const startYear = edu.startDate
                ? new Date(edu.startDate).getFullYear()
                : "";
              const endYear = edu.endDate
                ? new Date(edu.endDate).getFullYear()
                : "";
              const isActive = activeIndices["education"] === idx;

              return (
                <div
                  key={idx}
                  className="flex items-start space-x-3 relative pl-3 pb-4 border-b border-gray-100 last:border-b-0 cursor-pointer"
                  onClick={() => {
                    handleSetActive("education", idx);
                    onEditClick?.(edu, "education", idx);
                  }}
                >
                  <div
                    className={`absolute left-0 top-1 h-full w-1 rounded ${
                      isActive ? "bg-green-700" : "bg-gray-300"
                    }`}
                  ></div>
                  <div>
                    <p className="text-base font-semibold text-gray-900">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500 flex gap-2">
                      {startYear} - {endYear}
                      <div className="flex gap-2">
                        <div className="bg-gray-500 w-1.5 h-1.5 mt-2 rounded-lg"></div>
                        {edu.grade ? ` GPA: ${edu.grade}` : ""}
                      </div>
                    </p>
                  </div>
                </div>
              );
            })}

          {/* Work Experience */}
          {text === "work experience" &&
            Array.isArray(data) &&
            (data as WorkExperience[]).map((exp, idx) => {
              const startYear = exp.startDate
                ? new Date(exp.startDate).getFullYear()
                : "";
              const endYear = exp.endDate
                ? new Date(exp.endDate).getFullYear()
                : "";
              const isActive = activeIndices["work experience"] === idx;

              return (
                <div
                  key={idx}
                  className="flex items-start space-x-3 relative pl-3 pb-4 border-b border-gray-100 last:border-b-0 cursor-pointer"
                  onClick={() => {
                    handleSetActive("work experience", idx);
                    onEditClick?.(exp, "work experience", idx);
                  }}
                >
                  <div
                    className={`absolute left-0 top-1 h-full w-1 rounded ${
                      isActive ? "bg-green-700" : "bg-gray-300"
                    }`}
                  ></div>
                  <div>
                    <p className="font-semibold text-gray-900">
                      {exp.jobTitle}
                    </p>
                    <p className="text-sm">{exp.company}</p>
                    <p className="text-xs text-gray-500">
                      {startYear} - {endYear}
                    </p>
                    {exp.task && (
                      <p className="text-sm text-gray-700 mt-1">{exp.task}</p>
                    )}
                  </div>
                </div>
              );
            })}

          {/* Projects */}
          {text === "projects" &&
            Array.isArray(data) &&
            (data as Project[]).map((proj, idx) => (
              <div key={idx} className="space-y-1">
                <p className="font-semibold text-gray-900">{proj.name}</p>
                {proj.technologies && (
                  <div className="flex flex-wrap gap-1 text-xs">
                    {proj.technologies.split(",").map((tech, i) => (
                      <span
                        key={i}
                        className="bg-gray-100 text-gray-800 px-2 py-0.5 rounded-full"
                      >
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                )}
                {proj.description && (
                  <p className="text-sm">{proj.description}</p>
                )}
                <div className="flex gap-3 text-sm mt-1">
                  {proj.projectUrl && (
                    <a
                      href={proj.projectUrl}
                      target="_blank"
                      className="text-green-700 underline"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      className="text-green-700 underline"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}

          {/* Skills */}
          {text === "skills" && Array.isArray(data) && (
            <div className="flex flex-wrap gap-2">
              {(data as Skill[]).map((skill, idx) => (
                <span
                  key={idx}
                  className="inline-block bg-gray-100 text-gray-800 px-3 py-1 text-xs rounded-full"
                >
                  {typeof skill === "string" ? skill : skill.name || "Skill"}
                </span>
              ))}
            </div>
          )}

          {/* Languages */}
          {text === "languages" &&
            Array.isArray(data) &&
            (data as Language[]).map((lang, idx) => (
              <div key={idx} className="flex justify-between">
                <p>{lang.language}</p>
                <span className="text-xs text-white bg-green-600 px-2 py-0.5 rounded-full">
                  {lang.proficiency}
                </span>
              </div>
            ))}

          {/* Certifications */}
          {text === "certifications" &&
            Array.isArray(data) &&
            (data as Certification[]).map((cert, idx) => {
              const isActive = activeIndices["certifications"] === idx;
              return (
                <div
                  key={idx}
                  className="flex items-start space-x-3 relative pl-3 pb-4 border-b border-gray-100 last:border-b-0 cursor-pointer"
                  onClick={() => {
                    handleSetActive("certifications", idx);
                    onEditClick?.(cert, "certifications", idx);
                  }}
                >
                  <div
                    className={`absolute left-0 top-1 h-full w-1 rounded ${
                      isActive ? "bg-green-700" : "bg-gray-300"
                    }`}
                  ></div>
                  <div>
                    <p className="font-semibold text-gray-900">{cert.name}</p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    {cert.abstract && (
                      <p className="text-xs text-gray-500">{cert.abstract}</p>
                    )}
                  </div>
                </div>
              );
            })}

          {/* Links */}
          {text === "links" &&
            Array.isArray(data) &&
            (data as Link[]).map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                target="_blank"
                className="text-green-700 hover:underline block"
              >
                {link.platform || link.url}
              </a>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCards;
