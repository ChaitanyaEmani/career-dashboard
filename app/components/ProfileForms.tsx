import React, { useState } from "react";
import { InputCard, DateCard, DescCard, Button } from '../components/MultiInput';

// Type definitions
interface BasicDetailsData {
  firstName: string;
  lastName: string;
  professionalTitle: string;
  location: string;
  phone: string;
  bio: string;
}

interface EducationData {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  grade: string;
  startDate: string;
  endDate: string;
}

interface ExperienceData {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface ProjectData {
  name: string;
  description: string;
  technologies: string;
  projectUrl: string;
  githubUrl: string;
}

interface SkillData {
  skillName: string;
  proficiency: string;
  category: string;
  yearsOfExperience: string;
}

interface LanguageData {
  language: string;
  proficiency: string;
}

interface CertificationData {
  name: string;
  issuer: string;
  issueDate: string;
  abstract: string;
  doiUrl: string;
}

interface LinkData {
  platform: string;
  url: string;
}

// Common form props interface
interface FormProps<T> {
  onSubmit: (data: T) => void;
  onCancel: () => void;
  initialData?: Partial<T>;
}

// Basic validation function
const validateRequired = <T extends object>(data: T, requiredFields: (keyof T)[]): string[] => {
  const errors: string[] = [];

  requiredFields.forEach((field) => {
    const value = data[field];
    if (
      value === undefined ||
      value === null ||
      (typeof value === 'string' && value.trim() === '')
    ) {
      errors.push(`${String(field)} is required`);
    }
  });

  return errors;
};



export const BasicDetailsForm: React.FC<FormProps<BasicDetailsData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<BasicDetailsData>

}) => {
  const [formData, setFormData] = useState<BasicDetailsData>({
 
  firstName: initialData.firstName ?? "",
  lastName: initialData.lastName ?? "",
  professionalTitle: initialData.professionalTitle ?? "",
  location: initialData.location ?? "",
  phone: initialData.phone ?? "",
  bio: initialData.bio ?? ""
});


  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['firstName', 'lastName']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]); // Clear errors on change
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <InputCard 
          type="text" 
          title="First Name " 
          name="firstName" 
          placeholderName="John" 
          onChange={handleChange} 
          value={formData.firstName}
        />
        <InputCard 
          type="text" 
          title="Last Name " 
          name="lastName" 
          placeholderName="Doe" 
          onChange={handleChange} 
          value={formData.lastName}
        />
      </div>

      <InputCard 
        type="text" 
        title="Professional Title" 
        name="professionalTitle" 
        placeholderName="Frontend Developer" 
        onChange={handleChange} 
        value={formData.professionalTitle}
      />

      <InputCard 
        type="text" 
        title="Location" 
        name="location" 
        placeholderName="London, UK" 
        onChange={handleChange} 
        value={formData.location}
      />

      <InputCard 
        type="tel" 
        title="Phone" 
        name="phone" 
        placeholderName="+1 (555) 123-4567" 
        onChange={handleChange} 
        value={formData.phone}
      />

      <DescCard 
        name="bio" 
        value={formData.bio} 
        placeholderName="Passionate frontend developer with 3+ years of experience in React and modern web technologies." 
        title="Bio" 
        onChange={handleChange} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3 items-end">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Save Changes" type="submit" />
      </div>
    </form>
  );
};

export const EducationForm: React.FC<FormProps<EducationData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<EducationData>

}) => {
  const [formData, setFormData] = useState<EducationData>({
   
    institution: initialData.institution ?? "",
    degree: initialData.degree ?? "",
    fieldOfStudy: initialData.fieldOfStudy ?? "",
    grade: initialData.grade ?? "",
    startDate: initialData.startDate ?? "",
    endDate: initialData.endDate ?? "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['institution', 'degree']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <InputCard 
          title="Degree "
          type="text" 
          name="degree" 
          placeholderName="Bachelor of Science" 
          value={formData.degree} 
          onChange={handleChange}
        />
        <InputCard 
          title="Field of Study"
          type="text" 
          name="fieldOfStudy" 
          placeholderName="Computer Science" 
          value={formData.fieldOfStudy} 
          onChange={handleChange}
        />
      </div>
      
      <InputCard
        title="Institution " 
        type="text" 
        name="institution" 
        placeholderName="University Name" 
        value={formData.institution} 
        onChange={handleChange}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <DateCard 
          title="Start Date"
          name="startDate"  
          value={formData.startDate}  
          onChange={handleChange}  
          placeholderName="Start Date" 
        />
        <DateCard 
          title="End Date"
          name="endDate"  
          value={formData.endDate}  
          onChange={handleChange}  
          placeholderName="End Date" 
        />
      </div> 
      
      <div className="w-[290px]">
        <InputCard 
          title="Grade"
          type="text" 
          name="grade" 
          placeholderName="3.8/4.0" 
          value={formData.grade} 
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Education" type="submit" />
      </div>
    </form>
  );
};

export const ExperienceForm: React.FC<FormProps<ExperienceData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<ExperienceData>

}) => {
  const [formData, setFormData] = useState<ExperienceData>({
   
    jobTitle: initialData.jobTitle ?? "",
    company: initialData.company ?? "",
    startDate: initialData.startDate ?? "",
    endDate: initialData.endDate ?? "",
    situation: initialData.situation ?? "",
    task: initialData.task ?? "",
    action: initialData.action ?? "",
    result: initialData.result ?? ""
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['jobTitle', 'company']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors.length > 0) setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <InputCard 
          type="text" 
          name="jobTitle" 
          title="Job Title " 
          placeholderName="Software Developer" 
          value={formData.jobTitle} 
          onChange={handleChange} 
        />
        <InputCard 
          type="text" 
          name="company" 
          title="Company " 
          placeholderName="Company Name" 
          value={formData.company} 
          onChange={handleChange} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <DateCard 
          name="startDate" 
          title="Start Date" 
          placeholderName="dd-mm-yyyy" 
          value={formData.startDate} 
          onChange={handleChange} 
        />
        <DateCard 
          name="endDate" 
          title="End Date" 
          placeholderName="dd-mm-yyyy" 
          value={formData.endDate} 
          onChange={handleChange} 
        />
      </div>

      <DescCard 
        name="situation" 
        title="Situation" 
        placeholderName="Describe the context and background of your role" 
        value={formData.situation} 
        onChange={handleChange} 
      />
      <DescCard 
        name="task" 
        title="Task" 
        placeholderName="Explain the specific tasks and responsibilities you had" 
        value={formData.task} 
        onChange={handleChange} 
      />
      <DescCard 
        name="action" 
        title="Action" 
        placeholderName="Detail the actions you took to address the tasks" 
        value={formData.action} 
        onChange={handleChange} 
      />
      <DescCard 
        name="result" 
        title="Result" 
        placeholderName="Describe the outcomes and impact of your actions" 
        value={formData.result} 
        onChange={handleChange} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Experience" type="submit" />
      </div>
    </form>
  );
};

export const ProjectsForm: React.FC<FormProps<ProjectData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<ProjectData>

}) => {
  const [formData, setFormData] = useState<ProjectData>({
   
    name: initialData.name||"",
    description: initialData.description ?? "",
    technologies: initialData.technologies ?? "",
    projectUrl: initialData.projectUrl ?? "",
    githubUrl: initialData.githubUrl ?? "",
    
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['name', 'description']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <InputCard 
        type="text" 
        name="name" 
        title="Project name " 
        placeholderName="Project Title" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <InputCard 
        type="text" 
        name="technologies" 
        title="Technologies Used" 
        placeholderName="React, Node.js, MongoDB" 
        value={formData.technologies} 
        onChange={handleChange} 
      />

      <DescCard 
        name="description" 
        title="Description " 
        placeholderName="Describe your project and its key features" 
        value={formData.description} 
        onChange={handleChange}
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <InputCard 
          type="url" 
          name="projectUrl" 
          title="Project URL" 
          placeholderName="https://project-demo.com" 
          value={formData.projectUrl} 
          onChange={handleChange} 
        />
        <InputCard 
          type="url" 
          name="githubUrl" 
          title="GitHub Repository" 
          placeholderName="https://github.com/username/repo" 
          value={formData.githubUrl} 
          onChange={handleChange} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Project" type="submit" />
      </div>
    </form>
  );
};

export const SkillsForm: React.FC<FormProps<SkillData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<SkillData>

}) => {
  const [formData, setFormData] = useState<SkillData>({
   
    skillName: initialData.skillName ?? "",
    proficiency: initialData.proficiency ?? "",
    category: initialData.category ?? "",
    yearsOfExperience: initialData.yearsOfExperience ?? "",
   
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['skillName', 'proficiency']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <InputCard 
        type="text" 
        name="skillName" 
        title="Skill " 
        placeholderName="Python" 
        value={formData.skillName} 
        onChange={handleChange} 
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex flex-col gap-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency Level </label>
          <select
            name="proficiency"
            value={formData.proficiency}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          >
            <option value="">Select Level</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
            <option value="Expert">Expert</option>
          </select>
        </div>
        <div className="flex flex-col gap-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Category</option>
            <option value="Programming Languages">Programming Languages</option>
            <option value="Frameworks">Frameworks</option>
            <option value="Databases">Databases</option>
            <option value="Tools">Tools</option>
            <option value="Soft Skills">Soft Skills</option>
            <option value="Other">Other</option>
          </select>
        </div>
      </div>

      <InputCard 
        type="text" 
        name="yearsOfExperience" 
        title="Years of Experience" 
        placeholderName="3 years and 2 months" 
        value={formData.yearsOfExperience} 
        onChange={handleChange} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Skill" type="submit" />
      </div>
    </form>
  );
};

export const LanguagesForm: React.FC<FormProps<LanguageData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<LanguageData>

}) => {
  const [formData, setFormData] = useState<LanguageData>({
   
    language: initialData.language ?? "",
    proficiency: initialData.proficiency ?? ""
   
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['language', 'proficiency']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  // Fixed: Added proper checkbox handling
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]);
  };


  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}

      <InputCard 
        type="text" 
        name="language" 
        title="Language " 
        placeholderName="French" 
        value={formData.language} 
        onChange={handleChange} 
      />

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Proficiency Level </label>
        <select
          name="proficiency"
          value={formData.proficiency}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Level</option>
          <option value="Elementary">Elementary</option>
          <option value="Limited Working">Limited Working</option>
          <option value="Professional Working">Professional Working</option>
          <option value="Full Professional">Full Professional</option>
          <option value="Native">Native</option>
        </select>
      </div>  

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Language" type="submit" />
      </div>
    </form>
  );
};

export const CertificationsForm: React.FC<FormProps<CertificationData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<CertificationData>

}) => {
  const [formData, setFormData] = useState<CertificationData>({
   
    name: initialData.name ?? "",
    issuer: initialData.issuer ?? "",
    issueDate: initialData.issueDate ?? "",
    abstract: initialData.abstract ?? "",
    doiUrl: initialData.doiUrl ?? "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['name', 'issuer']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  // Fixed: Added HTMLTextAreaElement for DescCard support
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}
      
      <InputCard 
        type="text" 
        name="name" 
        title="Certificate Title " 
        placeholderName="Certificate Title" 
        value={formData.name} 
        onChange={handleChange} 
      />
      <InputCard 
        type="text" 
        name="issuer" 
        title="Publication/Issuer " 
        placeholderName="IEEE Conference, Hiron AI" 
        value={formData.issuer} 
        onChange={handleChange} 
      />
      <DescCard 
        name="abstract" 
        title="Abstract" 
        placeholderName="Brief description of about certification & Learnings" 
        value={formData.abstract} 
        onChange={handleChange}
      />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <DateCard 
          name="issueDate" 
          placeholderName="dd-mm-yyyy" 
          title="Issuing Date" 
          value={formData.issueDate} 
          onChange={handleChange}
        />
        <InputCard 
          type="url" 
          name="doiUrl" 
          title="DOI/URL" 
          placeholderName="https://doi.org/..." 
          value={formData.doiUrl} 
          onChange={handleChange} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Certificate" type="submit" />
      </div>
    </form>
  );
};

export const LinksForm: React.FC<FormProps<LinkData>> = ({ 
  onSubmit, 
  onCancel, 
  initialData = {} as Partial<LinkData>

}) => {
  const [formData, setFormData] = useState<LinkData>({
   
    platform: initialData.platform ??"",
    url: initialData.url ?? "",
   
  });

  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateRequired(formData, ['platform', 'url']);
    
    if (validationErrors.length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setErrors([]);
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors.length > 0) setErrors([]);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {errors.length > 0 && (
        <div className="bg-red-50 border border-red-200 rounded-md p-3">
          <ul className="text-red-600 text-sm">
            {errors.map((error, index) => (
              <li key={index}>• {error}</li>
            ))}
          </ul>
        </div>
      )}
    
      <div>
        <label className="block text-sm font-medium text-gray-800 mb-1">Link </label>
        <select
          name="platform"
          value={formData.platform}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"
          required
        >
          <option value="">Select Platform</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="GitHub">GitHub</option>
          <option value="Portfolio">Portfolio Website</option>
          <option value="Twitter">Twitter</option>
          <option value="Behance">Behance</option>
          <option value="Dribbble">Dribbble</option>
          <option value="Medium">Medium</option>
          <option value="Personal Blog">Personal Blog</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <InputCard 
        type="url" 
        name="url" 
        title="URL " 
        placeholderName="https://hironai.com/url" value={formData.url} onChange={handleChange} />
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-3">
        <Button text="Cancel" onClick={onCancel} type="button" />
        <Button text="Add Link" type="submit" />
      </div>
    </form>
  );
};