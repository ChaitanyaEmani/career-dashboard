import React from "react";
import { LucideIcon } from "lucide-react";

// Define specific types for each data structure to ensure type safety.
interface BasicDetails {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  bio?: string;
}

interface Education {
  degree?: string;
  institution?: string;
  year?: string;
}

interface WorkExperience {
  role?: string;
  company?: string;
  duration?: string;
  description?: string;
}

interface Project {
  title?: string;
  techStack?: string;
  description?: string;
  demoLink?: string;
}

// A skill can be represented as a simple string or an object with a name.
type Skill = string | { name?: string };

interface Language {
  language?: string;
  proficiency?: string;
}

interface Certification {
  title?: string;
  issuer?: string;
}

interface Link {
  url?: string;
  label?: string;
}

// Create a union type that encompasses all possible shapes of the data prop.
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
  data?: ProfileData; // Replaced 'any' with the specific union type.
}

const ProfileCards: React.FC<ProfileCardsProps> = ({
  left_text,
  right_text,
  icon: Icon,
  text,
  btnText,
  onAddClick,
  data,
}) => {
  // Improved check for empty data. It now correctly handles empty objects
  // for "basic details" as well as empty arrays for other sections.
  const isDataEmpty =
    !data ||
    (Array.isArray(data) && data.length === 0) ||
    (typeof data === "object" && !Array.isArray(data) && Object.keys(data).length === 0);

  return (
    <div className="flex flex-col p-4 border bg-white rounded-lg shadow-sm">
      <div className="flex justify-between items-center">
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
            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            onClick={onAddClick}
          >
            Add {btnText}
          </button>
        </div>
      ) : (
        <div className="mt-4 text-sm text-gray-700 space-y-3">
          {/* The rendering logic now uses type assertions (e.g., `as Education[]`)
            to inform TypeScript about the specific data type being handled in each block,
            which is necessary when working with union types.
          */}
          {text === "basic details" && data && !Array.isArray(data) && (
            <div>
              <p className="font-bold text-base text-gray-900">
                {(data as BasicDetails).firstName || ""} {(data as BasicDetails).lastName || ""}
              </p>
              {(data as BasicDetails).email && <p>{(data as BasicDetails).email}</p>}
              {(data as BasicDetails).phone && <p>{(data as BasicDetails).phone}</p>}
              {(data as BasicDetails).bio && <p className="mt-1 text-gray-600">{(data as BasicDetails).bio}</p>}
            </div>
          )}

          {text === "education" &&
            Array.isArray(data) &&
            (data as Education[]).map((edu, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-2">
                <p>
                  <strong className="text-gray-900">{edu.degree || "Degree"}</strong> — {edu.institution || "Institution"}
                </p>
                {edu.year && <p className="text-gray-500 text-xs">{edu.year}</p>}
              </div>
            ))}

          {text === "work experience" &&
            Array.isArray(data) &&
            (data as WorkExperience[]).map((exp, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-2">
                <p>
                  <strong className="text-gray-900">{exp.role || "Role"}</strong> at {exp.company || "Company"}
                </p>
                {exp.duration && <p className="text-xs text-gray-500">{exp.duration}</p>}
                {exp.description && <p className="mt-1 text-gray-600">{exp.description}</p>}
              </div>
            ))}

          {text === "projects" &&
            Array.isArray(data) &&
            (data as Project[]).map((proj, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-2">
                <p>
                  <strong className="text-gray-900">{proj.title || "Project"}</strong>
                  {proj.techStack && <span className="text-xs text-gray-500 ml-2">({proj.techStack})</span>}
                </p>
                {proj.description && <p className="mt-1 text-gray-600">{proj.description}</p>}
                {proj.demoLink && (
                  <a href={proj.demoLink} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                    Live Demo
                  </a>
                )}
              </div>
            ))}

          {text === "skills" && Array.isArray(data) && (
            <div className="flex flex-wrap gap-2">
              {(data as Skill[]).map((skill, idx) => (
                <span key={idx} className="inline-block px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs font-medium">
                  {typeof skill === "string" ? skill : skill.name || "Skill"}
                </span>
              ))}
            </div>
          )}

          {text === "languages" &&
            Array.isArray(data) &&
            (data as Language[]).map((lang, idx) => (
              <p key={idx} className="border-b border-gray-100 last:border-b-0 pb-2">
                {lang.language || "Language"} - <span className="text-gray-600">{lang.proficiency || "Proficiency"}</span>
              </p>
            ))}

          {text === "certifications" &&
            Array.isArray(data) &&
            (data as Certification[]).map((cert, idx) => (
              <div key={idx} className="border-b border-gray-100 last:border-b-0 pb-2">
                <p>
                  <strong className="text-gray-900">{cert.title || "Certification"}</strong>
                </p>
                {cert.issuer && <p className="text-gray-500">{cert.issuer}</p>}
              </div>
            ))}

          {text === "links" &&
            Array.isArray(data) &&
            (data as Link[]).map((link, idx) => (
              <p key={idx} className="border-b border-gray-100 last:border-b-0 pb-2">
                {link.url ? (
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">
                    {link.label || link.url}
                  </a>
                ) : (
                  <span>{link.label || "Link"}</span>
                )}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCards;
