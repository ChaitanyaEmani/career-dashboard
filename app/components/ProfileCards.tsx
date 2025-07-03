"use client";

import React, { useState, useMemo } from "react";
import {
  Github,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  Mail,
  Globe,
  Link as LinkIcon,
  LucideIcon,
} from "lucide-react";

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

interface Skill {
  skillName: string;
  category: string;
}
interface Language {
  language?: string;
  proficiency?: string;
}

interface Certification {
  name?: string;
  issuer?: string;
  issueDate?: string;
  abstract?: string;
  doiUrl?: string;
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

const platformIcons: { [key: string]: LucideIcon } = {
  github: Github,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
  email: Mail,
  portfolio: Globe,
  website: Globe,
  personal: Globe,
  link: LinkIcon, // default/fallback
};

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
  const isDataEmpty = useMemo(() => {
    if (!data) return true;
    if (Array.isArray(data)) return data.length === 0;
    if (typeof data === "object") {
      return Object.values(data).every(
        (val) => val === undefined || val === "" || val === null
      );
    }
    return false;
  }, [data]);

  const [activeIndices, setActiveIndices] = useState<{ [key: string]: number }>(
    {
      education: 0,
      "work experience": 0,
      certifications: 0,
      projects: 0,
      skills: 0,
      links: 0,
      languages: 0,
    }
  );

  const handleSetActive = (section: string, index: number) => {
    setActiveIndices((prev) => ({ ...prev, [section]: index }));
  };

  const techColors: string[] = [
    "bg-blue-100 text-blue-800",
    "bg-green-100 text-green-800",
    "bg-yellow-100 text-yellow-800",
    "bg-purple-100 text-purple-800",
    "bg-pink-100 text-pink-800",
    "bg-indigo-100 text-indigo-800",
    "bg-red-100 text-red-800",
    "bg-teal-100 text-teal-800",
    "bg-orange-100 text-orange-800",
    "bg-violet-100 text-violet-800",
    "bg-gray-100 text-gray-800",
    "bg-amber-100 text-amber-800",
    "bg-lime-100 text-lime-800",
    "bg-emerald-100 text-emerald-800",
    "bg-cyan-100 text-cyan-800",
    "bg-sky-100 text-sky-800",
    "bg-fuchsia-100 text-fuchsia-800",
    "bg-rose-100 text-rose-800",
  ];

  // Function to pick a random color
  const getRandomColor = () =>
    techColors[Math.floor(Math.random() * techColors.length)];

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
          {text === "basic details" &&
            !Array.isArray(data) &&
            (() => {
              const defaultBasicDetails: BasicDetails = {
                firstName: "John",
                lastName: "Doe",
                phone: "123-456-7890",
                bio: "Passionate web developer with 3+ years of experience.",
                email: "john.doe@example.com",
                professionalTitle: "Frontend Developer",
                location: "Hyderabad, India",
              };

              const basicDetails: BasicDetails = {
                ...defaultBasicDetails,
                ...(data as BasicDetails),
              };

              return (
                <div className="flex flex-col gap-3">
                  <div className="flex items-start gap-4">
                    <div className="w-21 h-21 text-3xl rounded-full bg-green-100 flex items-center justify-center text-green-700 font-bold">
                      {`${basicDetails.firstName?.charAt(0) ?? ""}${
                        basicDetails.lastName?.charAt(0) ?? ""
                      }`}
                    </div>
                    <div className="flex flex-col text-gray-800">
                      <p className="text-lg font-semibold text-gray-900">
                        {basicDetails.firstName} {basicDetails.lastName}
                      </p>
                      <p className="text-lg text-gray-500">
                        {basicDetails.professionalTitle}
                      </p>
                      <p className="text-lg text-gray-500">
                        {basicDetails.location}
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-md flex flex-col text-gray-700 min-w-[180px] ">
                      <span className="text-gray-400">Email:</span>{" "}
                      {basicDetails.email}
                    </p>
                    <p className="text-md flex flex-col text-gray-700 min-w-[180px]">
                      <span className="text-gray-400">Phone:</span>{" "}
                      {basicDetails.phone}
                    </p>
                  </div>
                  {basicDetails.bio && (
                    <p className="mt-1 text-sm bg-gray-200 p-2 rounded-sm text-gray-700">
                      {basicDetails.bio}
                    </p>
                  )}
                </div>
              );
            })()}

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
                  className="flex items-start space-x-3 relative pl-3 mb-5 cursor-pointer"
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
                    <div className="text-sm text-gray-500 flex gap-2">
                      {startYear} - {endYear}
                      <div className="flex gap-2">
                        <div className="bg-gray-500 w-1.5 h-1.5 mt-2 rounded-lg"></div>
                        {edu.grade ? ` GPA: ${edu.grade}` : ""}
                      </div>
                    </div>
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
                  className="flex items-start space-x-3 relative pl-3 mb-5 cursor-pointer"
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
              <div
                key={idx}
                className="space-y-2 mb-4 border border-gray-200 p-3 rounded-md cursor-pointer"
                onClick={() => {
                  handleSetActive("projects", idx);
                  onEditClick?.(proj, "projects", idx);
                }}
              >
                <p className="font-semibold text-gray-900">{proj.name}</p>
                {proj.technologies && (
                  <div className="flex flex-wrap gap-1 text-xs">
                    {proj.technologies.split(",").map((tech, i) => {
                      // Assign a random color once per render using useMemo
                      const colorClass = getRandomColor();

                      return (
                        <span
                          key={i}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${colorClass}`}
                        >
                          {tech.trim()}
                        </span>
                      );
                    })}
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
                      className="text-green-800 font-medium"
                    >
                      Live Demo
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      className="text-green-800 font-medium"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            ))}

          {/* Skills */}
          {text === "skills" &&
            Array.isArray(data) &&
            (() => {
              const skillsArray = data as Skill[];

              const technicalSkills = skillsArray.filter(
                (skill) => skill.category.toLowerCase() !== "soft skills"
              );

              const softSkills = skillsArray.filter(
                (skill) => skill.category.toLowerCase() === "soft skills"
              );

              return (
                <div className="space-y-4">
                  {/* Technical Skills */}
                  {technicalSkills.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        Technical Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {technicalSkills.map((skill, idx) => {
                          const colorClass = getRandomColor();
                          return (
                            <span
                              key={`tech-${idx}`}
                              className={`inline-block px-3 py-1 text-xs cursor-pointer rounded-full font-medium ${colorClass}`}
                              onClick={() => {
                                handleSetActive("skills", idx);
                                onEditClick?.(skill, "skills", idx);
                              }}
                            >
                              {skill.skillName}
                            </span>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Soft Skills */}
                  {softSkills.length > 0 && (
                    <div>
                      <p className="text-sm font-semibold text-gray-800 mb-1">
                        Soft Skills
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {softSkills.map((skill, idx) => (
                          <span
                            key={`soft-${idx}`}
                            className="inline-block bg-gray-200 cursor-pointer text-gray-800 px-3 py-1 text-xs rounded-full font-medium"
                            onClick={() => {
                              handleSetActive("skills", idx);
                              onEditClick?.(skill, "skills", idx);
                            }}
                          >
                            {skill.skillName}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })()}

          {/* Languages */}
          {text === "languages" &&
            Array.isArray(data) &&
            (data as Language[]).map((lang, idx) => {
              const colors = getRandomColor();
              return (
                <div
                  key={idx}
                  className="flex justify-between mb-3 cursor-pointer"
                  onClick={() => {
                    handleSetActive("languages", idx);
                    onEditClick?.(lang, "languages", idx);
                  }}
                >
                  <p>{lang.language}</p>
                  <span className={`text-xs ${colors} px-3 py-1 rounded-full`}>
                    {lang.proficiency}
                  </span>
                </div>
              );
            })}

          {/* Certifications */}
          {text === "certifications" &&
            Array.isArray(data) &&
            (data as Certification[]).map((cert, idx) => {
              const isActive = activeIndices["certifications"] === idx;
              const year = cert.issueDate
                ? new Date(cert.issueDate).getFullYear()
                : "";
              return (
                <div
                  key={idx}
                  className="flex items-start space-x-3 relative pl-3 mb-5 cursor-pointer"
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
                    <p className="text-base font-semibold text-gray-900">
                      {cert.name}
                    </p>
                    <p className="text-sm text-gray-600">{cert.issuer}</p>
                    <p className="text-sm text-gray-500 flex gap-2"> {year}</p>
                    <p>{cert.abstract}</p>
                  </div>
                </div>
              );
            })}

          {/* Links */}
          {/* Links */}
          {text === "links" &&
            Array.isArray(data) &&
            (data as Link[]).map((link, idx) => {
              const platformKey = link.platform?.toLowerCase() || "link";
              const IconComponent = platformIcons[platformKey] || LinkIcon;

              return (
                <a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 cursor-pointer mb-2 text-gray-700 hover:underline"
                  onClick={() => {
                  
                    handleSetActive("links", idx);
                    onEditClick?.(link, "links", idx);
                  }}
                >
                  <IconComponent
                    size={28}
                    className="text-white bg-gray-400 p-1 rounded-xl"
                  />
                  <span>{link.platform || link.url}</span>
                </a>
              );
            })}
        </div>
      )}
    </div>
  );
};

export default ProfileCards;
