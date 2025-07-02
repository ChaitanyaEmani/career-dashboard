"use client";

import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileCards from "../components/ProfileCards";
import FormModal from "../components/FormModal";
import {
  BasicDetailsForm,
  EducationForm,
  ExperienceForm,
  ProjectsForm,
  SkillsForm,
  LanguagesForm,
  CertificationsForm,
  LinksForm,
} from "../components/ProfileForms";
import {
  Briefcase,
  CloudUpload,
  Lightbulb,
  Languages,
  Link2,
  FileBadge,
  Code2,
} from "lucide-react";
import BarBox from "../components/BarBox";
import InfoBox from "../components/InfoBox";
import TabNavigation from "../components/TabNavigation";

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

// ---------- Component ----------

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile View");
  const [openForm, setOpenForm] = useState<FormType | null>(null);

  const [profileData, setProfileData] = useState<ProfileDataType>({
    basicDetails: undefined,
    education: [],
    experience: [],
    projects: [],
    skills: [],
    languages: [],
    certifications: [],
    links: [],
  });

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

  // Form opening handlers
  const openBasicDetailsForm = () => setOpenForm("basicDetails");
  const openEducationForm = () => setOpenForm("education");
  const openExperienceForm = () => setOpenForm("experience");
  const openProjectsForm = () => setOpenForm("projects");
  const openSkillsForm = () => setOpenForm("skills");
  const openLanguagesForm = () => setOpenForm("languages");
  const openCertificationsForm = () => setOpenForm("certifications");
  const openLinksForm = () => setOpenForm("links");

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
            />
          </div>

          <div className="px-4 border bg-white rounded-lg mb-8">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {activeTab === "Profile View" && (
              <>
                <ProfileCards
                  left_text="Basic Details"
                  right_text="Add"
                  icon={Lightbulb}
                  text="basic details"
                  btnText="Basic details"
                  onAddClick={openBasicDetailsForm}
                  data={profileData.basicDetails}
                />
                <ProfileCards
                  left_text="Education"
                  right_text="Add"
                  icon={Lightbulb}
                  text="education"
                  btnText="Education"
                  onAddClick={openEducationForm}
                  data={profileData.education}
                />
                <ProfileCards
                  left_text="Work Experience"
                  right_text="Add"
                  icon={Briefcase}
                  text="work experience"
                  btnText="Experience"
                  onAddClick={openExperienceForm}
                  data={profileData.experience}
                />
                <ProfileCards
                  left_text="Projects"
                  right_text="Add"
                  icon={Code2}
                  text="projects"
                  btnText="Projects"
                  onAddClick={openProjectsForm}
                  data={profileData.projects}
                />
                <ProfileCards
                  left_text="Skills"
                  right_text="Add"
                  icon={Lightbulb}
                  text="skills"
                  btnText="Skills"
                  onAddClick={openSkillsForm}
                  data={profileData.skills}
                />
                <ProfileCards
                  left_text="Languages"
                  right_text="Add"
                  icon={Languages}
                  text="languages"
                  btnText="Languages"
                  onAddClick={openLanguagesForm}
                  data={profileData.languages}
                />
                <ProfileCards
                  left_text="Certifications"
                  right_text="Add"
                  icon={FileBadge}
                  text="certifications"
                  btnText="Certificates"
                  onAddClick={openCertificationsForm}
                  data={profileData.certifications}
                />
                <ProfileCards
                  left_text="Links & Social"
                  right_text="Add"
                  icon={Link2}
                  text="links"
                  btnText="Links"
                  onAddClick={openLinksForm}
                  data={profileData.links}
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
              />
            )}
          </div>

          <div className="border bg-white rounded-lg">
            <BarBox
              title="Profile Completion"
              value="0%"
              completionPercentage={0}
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
          onSubmit={(data) => handleFormSubmit("basicDetails", data)}
          onCancel={handleFormCancel}
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
        />
      </FormModal>
    </>
  );
}
