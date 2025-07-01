"use client";
import React,{useState} from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import ProfileCards from "../components/ProfileCards";
import { Briefcase,CloudUpload, Lightbulb, Languages, Link2, FileBadge, Code2 } from "lucide-react";
import BarBox from "../components/BarBox";
import InfoBox from "../components/InfoBox";
import TabNavigation from "../components/TabNavigation";
import {Button, InputCard, DescCard, DateCard} from "../components/MultiInput";

export default function Profile() {

  const [activeTab, setActiveTab] = useState("Profile View");
  const [openForm, setOpenForm] = useState<string | null>(null);

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
            <InfoBox title="Quick Start" subtitle="Upload your existing resume (PDF/DOCX) and let AI auto-fill your profile fields." icon={CloudUpload} btn1="Upload Resume"/>
          </div>
          
          <div className="px-4  border-1 bg-white rounded-lg mb-8">
            <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            {activeTab === "Profile View" && (
              <>
                <ProfileCards left_text="Basic Details" right_text="Add" icon={Lightbulb} text="basic details" btnText="Basic details" />
                <ProfileCards left_text="Education" right_text="Add" icon={Lightbulb} text="education" btnText="Education" />
                <ProfileCards left_text="Work Experience" right_text="Add" icon={Briefcase} text="work experience" btnText="Experience" />
                <ProfileCards left_text="Projects" right_text="Add" icon={Code2} text="projects" btnText="Projects" />
                <ProfileCards left_text="Skills" right_text="Add" icon={Lightbulb} text="skills" btnText="Skills" />
                <ProfileCards left_text="Languages" right_text="Add" icon={Languages} text="languages" btnText="Languages" />
                <ProfileCards left_text="Certifications" right_text="Add" icon={FileBadge} text="certifications" btnText="Certificates" />
                <ProfileCards left_text="Links & Social" right_text="Add" icon={Link2} text="links" btnText="Links" />
              </>
            )}

            {activeTab === "Education" && (
              <ProfileCards left_text="Education" right_text="Add" icon={Lightbulb} text="education" btnText="Education" />
            )}

            {activeTab === "Work Experience" && (
              <ProfileCards left_text="Work Experience" right_text="Add" icon={Briefcase} text="work experience" btnText="Experience" />
            )}

            {activeTab === "Projects" && (
              <ProfileCards left_text="Projects" right_text="Add" icon={Code2} text="projects" btnText="Projects" />
            )}

            {activeTab === "Languages" && (
              <ProfileCards left_text="Languages" right_text="Add" icon={Languages} text="languages" btnText="Languages" />
            )}

            {activeTab === "Certifications" && (
              <ProfileCards left_text="Certifications" right_text="Add" icon={FileBadge} text="certifications" btnText="Certificates" />
            )}

            {activeTab === "Links" && (
              <ProfileCards left_text="Links & Social" right_text="Add" icon={Link2} text="links" btnText="Links" />
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
    </>
  );
}
