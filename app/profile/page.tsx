"use client";

import React, { useState, useMemo, useEffect } from "react";
import Header from "../components/commonComponents/Header";
import Sidebar from "../components/commonComponents/Sidebar";
import ProfileCards from "../components/profileComponents/ProfileCards";
import FormModal from "../components/profileComponents/FormModal";
import {
  BasicDetailsForm,
  EducationForm,
  ExperienceForm,
  ProjectsForm,
  SkillsForm,
  LanguagesForm,
  CertificationsForm,
  LinksForm,
} from "../components/profileComponents/ProfileForms";
import {
  Briefcase,
  CloudUpload,
  Lightbulb,
  Languages,
  Link2,
  FileBadge,
  Code2,
} from "lucide-react";
import BarBox from "../components/commonComponents/BarBox";
import InfoBox from "../components/commonComponents/InfoBox";
import TabNavigation from "../components/TabNavigation";
import UploadResume from "../components/profileComponents/UploadResume";
// ---------- Types ----------

type FormType =
  | "basicDetails"
  | "education"
  | "experience"
  | "projects"
  | "skills"
  | "languages"
  | "certifications"
  | "links";

interface BasicDetails {
  firstName: string;
  lastName: string;
  professionalTitle: string;
  location: string;
  phone: string;
  bio: string;
  email: string;
}

interface Education {
  institution: string;
  degree: string;
  fieldOfStudy: string;
  grade: string;
  startDate: string;
  endDate: string;
}

interface Experience {
  jobTitle: string;
  company: string;
  startDate: string;
  endDate: string;
  situation: string;
  task: string;
  action: string;
  result: string;
}

interface Project {
  name: string;
  description: string;
  technologies: string;
  projectUrl: string;
  githubUrl: string;
}

interface Skill {
  skillName: string;
  proficiency: string;
  category: string;
  yearsOfExperience: string;
}

interface Language {
  language: string;
  proficiency: string;
}

interface Certification {
  name: string;
  issuer: string;
  issueDate: string;
  abstract: string;
  doiUrl: string;
}

interface Link {
  platform: string;
  url: string;
}

type FormDataType =
  | BasicDetails
  | Education
  | Experience
  | Project
  | Skill
  | Language
  | Certification
  | Link;

interface ProfileDataType {
  basicDetails?: BasicDetails;
  education: Education[];
  experience: Experience[];
  projects: Project[];
  skills: Skill[];
  languages: Language[];
  certifications: Certification[];
  links: Link[];
}

export type { FormType, BasicDetails, Education, Experience, Project, Skill, Language, Certification, Link, FormDataType, ProfileDataType };

// ---------- Component ----------

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile View");
  const [openForm, setOpenForm] = useState<FormType | null>(null);

  const [profileData, setProfileData] = useState<ProfileDataType>({
    basicDetails: {
      firstName: "John",
      lastName: "Doe",
      phone: "123-456-7890",
      bio: "Passionate web developer with 3+ years of experience.",
      email: "john.doe@example.com",
      professionalTitle: "Frontend Developer",
      location: "Hyderabad, India",
    },
    education: [],
    experience: [],
    projects: [],
    skills: [],
    languages: [],
    certifications: [],
    links: [],
  });

   
  useEffect(() => {
    const storedProfile = localStorage.getItem("profileData");
    if (storedProfile) {
      setProfileData(JSON.parse(storedProfile));
    }
  }, []);

  
  useEffect(() => {
    localStorage.setItem("profileData", JSON.stringify(profileData));
  }, [profileData]);

  const [editData, setEditData] = useState<{
    section: FormType | null;
    data: FormDataType | null;
    index: number | null;
  }>({ section: null, data: null, index: null });

  const handleFormSubmit = (formType: FormType, data: FormDataType) => {
    setProfileData((prev) => {
      switch (formType) {
        case "basicDetails":
          return { ...prev, basicDetails: data as BasicDetails };
        case "education":
          return { ...prev, education: [...prev.education, data as Education] };
        case "experience":
          return {
            ...prev,
            experience: [...prev.experience, data as Experience],
          };
        case "projects":
          return { ...prev, projects: [...prev.projects, data as Project] };
        case "skills":
          return { ...prev, skills: [...prev.skills, data as Skill] };
        case "languages":
          return {
            ...prev,
            languages: [...prev.languages, data as Language],
          };
        case "certifications":
          return {
            ...prev,
            certifications: [...prev.certifications, data as Certification],
          };
        case "links":
          return { ...prev, links: [...prev.links, data as Link] };
        default:
          return prev;
      }
    });

    setOpenForm(null);
  };

  const handleFormCancel = () => {
    setOpenForm(null);
  };

 const completion = useMemo(() => {
  let completed = 0;
  const totalSections = 8; // total form sections considered for progress

  if (profileData.basicDetails) completed++;
  if (profileData.education.length > 0) completed++;
  if (profileData.experience.length > 0) completed++;
  if (profileData.projects.length > 0) completed++;
  if (profileData.skills.length > 0) completed++;
  if (profileData.languages.length > 0) completed++;
  if (profileData.certifications.length > 0) completed++;
  if (profileData.links.length > 0) completed++;

  return Math.round((completed / totalSections) * 100);
}, [profileData]);

  // Form opening handlers
  const openBasicDetailsForm = () => setOpenForm("basicDetails");
  const openEducationForm = () => setOpenForm("education");
  const openExperienceForm = () => setOpenForm("experience");
  const openProjectsForm = () => setOpenForm("projects");
  const openSkillsForm = () => setOpenForm("skills");
  const openLanguagesForm = () => setOpenForm("languages");
  const openCertificationsForm = () => setOpenForm("certifications");
  const openLinksForm = () => setOpenForm("links");
  const [showUpload, setShowUpload] = useState(false);

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 sm:pt-10 pb-20 sm:pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <Header
            userName="Profile"
            text="Build your comprehensive professional profile to create an outstanding portfolio."
          />

          <div className="px-2.5 py-3 border bg-white rounded-lg mb-8">
            <InfoBox
              title="Quick Start"
              subtitle="Upload your existing resume (PDF/DOCX) and let AI auto-fill your profile fields."
              icon={CloudUpload}
              btn1="Upload Resume"
              bgColor="bg-green-800"
               btn1Click={() => setShowUpload(true)}
            />
            {showUpload && <UploadResume onClose={() => setShowUpload(false)} />}
          </div>

          <div className="px-4 border bg-white rounded-lg mb-8">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {activeTab === "Profile View" && (
              <>
                <ProfileCards
                  left_text="Basic Details"
                  right_text="Edit"
                  icon={Lightbulb}
                  text="basic details"
                  btnText="Basic details"
                  onAddClick={openBasicDetailsForm}
                  data={profileData.basicDetails}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Education"
                  right_text="Add"
                  icon={Lightbulb}
                  text="education"
                  btnText="Education"
                  onAddClick={openEducationForm}
                  data={profileData.education}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Work Experience"
                  right_text="Add"
                  icon={Briefcase}
                  text="work experience"
                  btnText="Experience"
                  onAddClick={openExperienceForm}
                  data={profileData.experience}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Projects"
                  right_text="Add"
                  icon={Code2}
                  text="projects"
                  btnText="Projects"
                  onAddClick={openProjectsForm}
                  data={profileData.projects}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Skills"
                  right_text="Add"
                  icon={Lightbulb}
                  text="skills"
                  btnText="Skills"
                  onAddClick={openSkillsForm}
                  data={profileData.skills}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Languages"
                  right_text="Add"
                  icon={Languages}
                  text="languages"
                  btnText="Languages"
                  onAddClick={openLanguagesForm}
                  data={profileData.languages}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Certifications"
                  right_text="Add"
                  icon={FileBadge}
                  text="certifications"
                  btnText="Certificates"
                  onAddClick={openCertificationsForm}
                  data={profileData.certifications}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
                <ProfileCards
                  left_text="Links & Social"
                  right_text="Add"
                  icon={Link2}
                  text="links"
                  btnText="Links"
                  onAddClick={openLinksForm}
                  data={profileData.links}
                  onEditClick={(item, section, index) => {
                    setEditData({
                      section: section as FormType,
                      data: item,
                      index,
                    });
                    setOpenForm(section as FormType);
                  }}
                />
              </>
            )}

            {activeTab === "Education" && (
              <ProfileCards
                left_text="Education"
                right_text="Add"
                icon={Lightbulb}
                text="education"
                btnText="Education"
                onAddClick={openEducationForm}
                data={profileData.education}
                onEditClick={(item, section, index) => {
                  setEditData({
                    section: section as FormType,
                    data: item,
                    index,
                  });
                  setOpenForm(section as FormType);
                }}
              />
            )}

            {activeTab === "Work Experience" && (
              <ProfileCards
                left_text="Work Experience"
                right_text="Add"
                icon={Briefcase}
                text="work experience"
                btnText="Experience"
                onAddClick={openExperienceForm}
                data={profileData.experience}
                onEditClick={(item, section, index) => {
                  setEditData({
                    section: section as FormType,
                    data: item,
                    index,
                  });
                  setOpenForm(section as FormType);
                }}
              />
            )}

            {activeTab === "Projects" && (
              <ProfileCards
                left_text="Projects"
                right_text="Add"
                icon={Code2}
                text="projects"
                btnText="Projects"
                onAddClick={openProjectsForm}
                data={profileData.projects}
                onEditClick={(item, section, index) => {
                  setEditData({
                    section: section as FormType,
                    data: item,
                    index,
                  });
                  setOpenForm(section as FormType);
                }}
              />
            )}

            {activeTab === "Languages" && (
              <ProfileCards
                left_text="Languages"
                right_text="Add"
                icon={Languages}
                text="languages"
                btnText="Languages"
                onAddClick={openLanguagesForm}
                data={profileData.languages}
                onEditClick={(item, section, index) => {
                  setEditData({
                    section: section as FormType,
                    data: item,
                    index,
                  });
                  setOpenForm(section as FormType);
                }}
              />
            )}

            {activeTab === "Certifications" && (
              <ProfileCards
                left_text="Certifications"
                right_text="Add"
                icon={FileBadge}
                text="certifications"
                btnText="Certificates"
                onAddClick={openCertificationsForm}
                data={profileData.certifications}
                onEditClick={(item, section, index) => {
                  setEditData({
                    section: section as FormType,
                    data: item,
                    index,
                  });
                  setOpenForm(section as FormType);
                }}
              />
            )}

            {activeTab === "Links" && (
              <ProfileCards
                left_text="Links & Social"
                right_text="Add"
                icon={Link2}
                text="links"
                btnText="Links"
                onAddClick={openLinksForm}
                data={profileData.links}
                onEditClick={(item, section, index) => {
                  setEditData({
                    section: section as FormType,
                    data: item,
                    index,
                  });
                  setOpenForm(section as FormType);
                }}
              />
            )}
          </div>

          <div className="border bg-white rounded-lg">
            <BarBox
              title="Profile Completion"
              value={`${completion}%`}
              completionPercentage={completion}
              buttonNames={[
                "Basic Details",
                "Education",
                "Experience",
                "Certifications",
              ]}
            />
          </div>
        </div>
      </div>

      {/* Form Modals */}
      <FormModal
        isOpen={openForm === "basicDetails"}
        onClose={handleFormCancel}
        title="Add Basic Details"
      >
        <BasicDetailsForm
          onSubmit={(data) =>
            handleFormSubmit("basicDetails", {
              ...data,
              email: profileData.basicDetails?.email || "",
            })
          }
          onCancel={handleFormCancel}
          initialData={editData.section === "basicDetails" ? editData.data as BasicDetails : profileData.basicDetails}// Pass all details, including email
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "education"}
        onClose={handleFormCancel}
        title="Add Education"
      >
        <EducationForm
          onSubmit={(data) => handleFormSubmit("education", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "education" ? editData.data as Education : undefined}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "experience"}
        onClose={handleFormCancel}
        title="Add Work Experience"
      >
        <ExperienceForm
          onSubmit={(data) => handleFormSubmit("experience", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "experience" ? editData.data as Experience : undefined}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "projects"}
        onClose={handleFormCancel}
        title="Add Project"
      >
        <ProjectsForm
          onSubmit={(data) => handleFormSubmit("projects", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "projects" ? editData.data as Project : undefined}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "skills"}
        onClose={handleFormCancel}
        title="Add Skill"
      >
        <SkillsForm
          onSubmit={(data) => handleFormSubmit("skills", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "skills" ? editData.data as Skill : undefined}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "languages"}
        onClose={handleFormCancel}
        title="Add Language"
      >
        <LanguagesForm
          onSubmit={(data) => handleFormSubmit("languages", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "languages" ? editData.data as Language : undefined}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "certifications"}
        onClose={handleFormCancel}
        title="Add Certification"
      >
        <CertificationsForm
          onSubmit={(data) => handleFormSubmit("certifications", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "certifications" ? editData.data as Certification : undefined}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "links"}
        onClose={handleFormCancel}
        title="Add Link"
      >
        <LinksForm
          onSubmit={(data) => handleFormSubmit("links", data)}
          onCancel={handleFormCancel}
           initialData={editData.section === "links" ? editData.data as Link : undefined}
        />
      </FormModal>
    </>
  );
}
