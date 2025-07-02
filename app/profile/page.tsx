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
  LinksForm 
} from "../components/ProfileForms";
import { Briefcase, CloudUpload, Lightbulb, Languages, Link2, FileBadge, Code2 } from "lucide-react";
import BarBox from "../components/BarBox";
import InfoBox from "../components/InfoBox";
import TabNavigation from "../components/TabNavigation";

export default function Profile() {
  const [activeTab, setActiveTab] = useState("Profile View");
  const [openForm, setOpenForm] = useState<string | null>(null);

  // Form submission handlers
  const handleFormSubmit = (formType: string, data: any) => {
    console.log(`${formType} data:`, data);
    // Here you would typically save the data to your state management or API
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

          <div className="px-2.5 py-3 border-1 bg-white rounded-lg mb-8">
            <InfoBox 
              title="Quick Start" 
              subtitle="Upload your existing resume (PDF/DOCX) and let AI auto-fill your profile fields." 
              icon={CloudUpload} 
              btn1="Upload Resume"
            />
          </div>
          
          <div className="px-4 border-1 bg-white rounded-lg mb-8">
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
                />
                <ProfileCards 
                  left_text="Education" 
                  right_text="Add" 
                  icon={Lightbulb} 
                  text="education" 
                  btnText="Education" 
                  onAddClick={openEducationForm}
                />
                <ProfileCards 
                  left_text="Work Experience" 
                  right_text="Add" 
                  icon={Briefcase} 
                  text="work experience" 
                  btnText="Experience" 
                  onAddClick={openExperienceForm}
                />
                <ProfileCards 
                  left_text="Projects" 
                  right_text="Add" 
                  icon={Code2} 
                  text="projects" 
                  btnText="Projects" 
                  onAddClick={openProjectsForm}
                />
                <ProfileCards 
                  left_text="Skills" 
                  right_text="Add" 
                  icon={Lightbulb} 
                  text="skills" 
                  btnText="Skills" 
                  onAddClick={openSkillsForm}
                />
                <ProfileCards 
                  left_text="Languages" 
                  right_text="Add" 
                  icon={Languages} 
                  text="languages" 
                  btnText="Languages" 
                  onAddClick={openLanguagesForm}
                />
                <ProfileCards 
                  left_text="Certifications" 
                  right_text="Add" 
                  icon={FileBadge} 
                  text="certifications" 
                  btnText="Certificates" 
                  onAddClick={openCertificationsForm}
                />
                <ProfileCards 
                  left_text="Links & Social" 
                  right_text="Add" 
                  icon={Link2} 
                  text="links" 
                  btnText="Links" 
                  onAddClick={openLinksForm}
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
              />
            )}
          </div>

          <div className="border-1 bg-white rounded-lg">
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
          onSubmit={(data) => handleFormSubmit("Basic Details", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "education"}
        onClose={handleFormCancel}
        title="Add Education"
      >
        <EducationForm
          onSubmit={(data) => handleFormSubmit("Education", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "experience"}
        onClose={handleFormCancel}
        title="Add Work Experience"
      >
        <ExperienceForm
          onSubmit={(data) => handleFormSubmit("Experience", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "projects"}
        onClose={handleFormCancel}
        title="Add Project"
      >
        <ProjectsForm
          onSubmit={(data) => handleFormSubmit("Projects", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "skills"}
        onClose={handleFormCancel}
        title="Add Skill"
      >
        <SkillsForm
          onSubmit={(data) => handleFormSubmit("Skills", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "languages"}
        onClose={handleFormCancel}
        title="Add Language"
      >
        <LanguagesForm
          onSubmit={(data) => handleFormSubmit("Languages", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "certifications"}
        onClose={handleFormCancel}
        title="Add Certification"
      >
        <CertificationsForm
          onSubmit={(data) => handleFormSubmit("Certifications", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>

      <FormModal
        isOpen={openForm === "links"}
        onClose={handleFormCancel}
        title="Add Link"
      >
        <LinksForm
          onSubmit={(data) => handleFormSubmit("Links", data)}
          onCancel={handleFormCancel}
        />
      </FormModal>
    </>
  );
}