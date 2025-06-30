"use client";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import ProfileCards from "../components/ProfileCards";
import { Briefcase,CloudUpload, Lightbulb, Languages, Link2, FileBadge, Code2 } from "lucide-react";
import BarBox from "../components/BarBox";
import InfoBox from "../components/InfoBox";
import TabNavigation from "../components/TabNavigation";

export default function Profile() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-100 pb-20 sm:pb-6 px-8 pt-6 -mt-12">
        <div className="max-w-7xl mx-auto p-5">
          <Header
            userName="Profile"
            text="Build your comprehensive professional profile to create an outstanding portfolio."
          />

          <div className="mr-3">
            <InfoBox
            title="Quick Start"
            subtitle="Upload your existing resume (PDF/DOCX) and let AI auto-fill your profile fields."
            btn1="Upload Resume"
            icon={<CloudUpload className="w-6 h-6" />}
          />
          </div>
          
          <div className="pt-6 mr-2.5">
            <TabNavigation/>
          </div>
          

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center pt-8">
            <ProfileCards
              left_text="Basic Details"
              right_text="Edit"
              icon={<Lightbulb className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Education"
              right_text="Add"
              icon={<Lightbulb className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Work Experience"
              right_text="Add"
              icon={<Briefcase className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Projects"
              right_text="Add"
              icon={<Code2 className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Skills"
              right_text="Edit"
              icon={<Lightbulb className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Languages"
              right_text="Add"
              icon={<Languages className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Certifications"
              right_text="Add"
              icon={<FileBadge className="w-8 h-8" />}
            />
            <ProfileCards
              left_text="Links & Social"
              right_text="Edit"
              icon={<Link2 className="w-8 h-8" />}
            />
          </div>
          <div className="pt-8 mr-2.5">
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
