import React from "react";
import { LucideIcon } from "lucide-react";

interface ProfileCardsProps {
  left_text: string;
  right_text: string;
  icon: LucideIcon;
  text: string;
  btnText: string;
  onAddClick: () => void;
  data?: any;
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
  const isEmpty = !data || (Array.isArray(data) && data.length === 0);

  return (
    <div className="flex flex-col p-4 border bg-white rounded-lg">
      <div className="flex justify-between">
        <p className="text-gray-800 text-md font-semibold">{left_text}</p>
        <p
          className="text-green-800 cursor-pointer hover:underline"
          onClick={onAddClick}
        >
          {right_text}
        </p>
      </div>

      {isEmpty ? (
        <div className="flex flex-col gap-3 items-center py-14">
          <Icon size={20} className="text-gray-500" />
          <p className="text-gray-500">No {text} added yet</p>
          <button
            className="px-3 py-1 bg-green-800 text-white rounded-sm hover:bg-green-900 transition-colors"
            onClick={onAddClick}
          >
            Add {btnText}
          </button>
        </div>
      ) : (
        <div className="mt-4 text-sm text-gray-700 space-y-2">
          {/* Handle each card type separately */}
          {text === "basic details" && data && (
            <div>
              <p><strong>{data.firstName || ''} {data.lastName || ''}</strong></p>
              {data.email && <p>{data.email}</p>}
              {data.phone && <p>{data.phone}</p>}
              {data.bio && <p>{data.bio}</p>}
            </div>
          )}

          {text === "education" &&
            Array.isArray(data) &&
            data.map((edu, idx) => (
              <div key={idx}>
                <p><strong>{edu.degree || 'Degree'}</strong> — {edu.institution || 'Institution'}</p>
                {edu.year && <p className="text-gray-500">{edu.year}</p>}
              </div>
            ))}

          {text === "work experience" &&
            Array.isArray(data) &&
            data.map((exp, idx) => (
              <div key={idx}>
                <p><strong>{exp.role || 'Role'}</strong> at {exp.company || 'Company'}</p>
                {exp.duration && <p>{exp.duration}</p>}
                {exp.description && <p className="text-gray-500">{exp.description}</p>}
              </div>
            ))}

          {text === "projects" &&
            Array.isArray(data) &&
            data.map((proj, idx) => (
              <div key={idx}>
                <p><strong>{proj.title || 'Project'}</strong>{proj.techStack && ` - ${proj.techStack}`}</p>
                {proj.description && <p>{proj.description}</p>}
                {proj.demoLink && (
                  <a 
                    href={proj.demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-green-700 underline"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            ))}

          {text === "skills" &&
            Array.isArray(data) &&
            data.map((skill, idx) => (
              <span
                key={idx}
                className="inline-block px-2 py-1 mr-2 mb-2 bg-gray-100 text-gray-800 rounded"
              >
                {typeof skill === 'string' ? skill : skill.name || 'Skill'}
              </span>
            ))}

          {text === "languages" &&
            Array.isArray(data) &&
            data.map((lang, idx) => (
              <p key={idx}>
                {lang.language || 'Language'} - {lang.proficiency || 'Proficiency'}
              </p>
            ))}

          {text === "certifications" &&
            Array.isArray(data) &&
            data.map((cert, idx) => (
              <div key={idx}>
                <p><strong>{cert.title || 'Certification'}</strong></p>
                {cert.issuer && <p className="text-gray-500">{cert.issuer}</p>}
              </div>
            ))}

          {text === "links" &&
            Array.isArray(data) &&
            data.map((link, idx) => (
              <p key={idx}>
                {link.url ? (
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 underline"
                  >
                    {link.label || link.url}
                  </a>
                ) : (
                  <span>{link.label || 'Link'}</span>
                )}
              </p>
            ))}
        </div>
      )}
    </div>
  );
};

export default ProfileCards;