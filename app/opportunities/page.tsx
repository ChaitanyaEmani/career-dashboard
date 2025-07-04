"use client"

import Header from "../components/commonComponents/Header";
import HeaderBox from "../components/commonComponents/HeaderBox";
import Sidebar from "../components/commonComponents/Sidebar";
import { Lightbulb } from "lucide-react";

export default function Opportunities() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 sm:pt-10 pb-20 sm:pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <Header
            userName="Opportunities"
            text="Discover personalized job matches based on your profile"
          />

          <HeaderBox
            icon={Lightbulb}
            text1="AI-Powered Job Matching"
            text2="Based on your skills and preferences, we found 47 matching opportunities this week."
            btn1="95% Match Rate"
            btn2="Remote Friendly"
            btn3="$75K+ Salary"
            bgColor="bg-green-50"
            borderColor="border-green-200"
            iconbgColor="bg-green-600"
            textColor="text-green-800"
            btnbgColor="bg-green-100"
          />
        </div>
      </div>
    </>
  );
}
