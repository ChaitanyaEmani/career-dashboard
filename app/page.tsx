// CareerDashboard.jsx
"use client"
import React from "react";

import { AlertTriangle, BookOpen, Mic, Plus, User, Heart, CircleCheck, CheckCircle } from "lucide-react";
// Import all components
import Header from "./components/commonComponents/Header";
import StatsCard from "./components/commonComponents/StatsCard";
import JobCard from "./components/JobCard";
import ActivityItem from "./components/ActivityItem";
import PortfolioItem from "./components/PortfolioItem";
import ActionButton from "./components/ActionButton";
import LearningAnalytics from "./components/LearningAnalytics";
import WellbeingAnalytics from "./components/WellbeingAnalytics";
import BarBox from "./components/commonComponents/BarBox";
// Import all data


const CareerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 sm:pt-10 pb-20 sm:pb-6 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header userName="Morning, Ankit" text="Welcome back! Here's your career development overview."/>
        
        <BarBox title="Complete Your Profile" 
        desc="Your profile is 65% complete. Add missing sections to improve your portfolio."
        icon={<AlertTriangle className="text-amber-800 w-5 h-5"/>}
        completionPercentage={65}
        bgColor="bg-amber-50"
        borderColor="border-yellow-200"/>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
          <StatsCard title="Portfolio Completion" value="65%" icon={User} bgColor="bg-blue-100" textColor="text-blue-800" />
          <StatsCard title="Courses Completed" value="8" icon={BookOpen} bgColor="bg-green-100" textColor="text-green-800" />
          <StatsCard title="Wellbeing score" value="7.8" icon={Heart} bgColor="bg-violet-100" textColor="text-violet-800" />
          <StatsCard title="Interview Sessions" value="12" icon={Mic} bgColor="bg-amber-100" textColor="text-amber-800" />
        </div>

        {/* Main Content Grid */}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Left side - 2 columns */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* Complete Your Portfolio */}
            <div className="flex flex-col gap-3 py-3.5 px-4 border bg-white rounded-lg">
              <div className="text-gray-800 font-medium">Complete Your Portfolio</div>
              <PortfolioItem
                title="Work Experience"
                status="Add Now"
                icon={AlertTriangle}
                bgColor="bg-red-50"
                borderColor="border-red-200"
                textColor="text-red-700"
              />
              <PortfolioItem
                title="Projects"
                status="Add Now"
                icon={AlertTriangle}
                bgColor="bg-yellow-50"
                borderColor="border-yellow-200"
                textColor="text-yellow-700"
              />
              <PortfolioItem
                title="Languages"
                status="Add Now"
                icon={CircleCheck}
                bgColor="bg-blue-50"
                borderColor="border-blue-200"
                textColor="text-blue-700"
              />
            </div>

            {/* Learning Analytics */}
            <div>
              <LearningAnalytics
                data={[
                  { month: "Jan", courses: 3, hours: 15 },
                  { month: "Feb", courses: 4, hours: 25 },
                  { month: "Mar", courses: 3, hours: 22 },
                  { month: "Apr", courses: 6, hours: 32 },
                  { month: "May", courses: 7, hours: 35 },
                  { month: "Jun", courses: 6, hours: 28 },
                ].map((item) => ({
                  ...item,
                  difference: item.hours - item.courses,
                }))}
              />
            </div>
          </div>

          {/* Right side - 1 column */}
          <div className="col-span-1 flex flex-col bg-white border py-3.5 px-4 rounded-lg">
            <p className="text-gray-800 font-semibold mb-5">Top Job Opportunities</p>
            <div className="flex flex-col gap-5">
              <JobCard title="Frontend Developer" company="TechCorp Inc." salary="$75,000" posted="2 days ago" />
              <JobCard title="Frontend Developer" company="TechCorp Inc." salary="$75,000" posted="2 days ago" />
              <JobCard title="Frontend Developer" company="TechCorp Inc." salary="$75,000" posted="2 days ago" />
              <JobCard title="Frontend Developer" company="TechCorp Inc." salary="$75,000" posted="2 days ago" />
            </div>
            <p className="text-center font-medium text-green-900 my-5">View All Opportunities</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* WellbeingAnalytics Card */}
          <div className="bg-white h-full">
            <WellbeingAnalytics
              data={[
                { name: "Excellent", value: 35, color: "#10b981" },
                { name: "Poor", value: 5, color: "#ef4444" },
                { name: "Fair", value: 25, color: "#f59e0b" },
                { name: "Good", value: 35, color: "#3b82f6" },
              ]}
            />
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white border px-4 py-3.5 rounded-lg flex flex-col justify-between h-full">
            <p className="font-semibold mb-3">Recent Activity</p>
            <div className="flex flex-col gap-2 flex-1">
              <ActivityItem title='Completed "React Fundamentals" course' time="2 hours ago" color="blue" />
              <ActivityItem title="Updated Profile education section" time="1 day ago" color="green" />
              <ActivityItem title="Completed meditation session" time="2 days ago" color="purple" />
              <ActivityItem title="Applied to Frontend Developer position" time="3 days ago" color="orange" />
              <ActivityItem title="Completed AI interview practice" time="5 days ago" color="gray" />
            </div>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white border px-4 py-3.5 rounded-lg flex flex-col justify-between h-full">
            <p className="font-semibold mb-3">Quick Actions</p>
            <div className="flex flex-col gap-3 flex-1">
              <ActionButton
                icon={Plus}
                text="Start Interview Practice"
                bgColor="bg-blue-100"
                borderColor="border-blue-300"
                textColor="text-blue-700"
              />
              <ActionButton
                icon={BookOpen}
                text="Browse Courses"
                bgColor="bg-green-100"
                borderColor="border-green-300"
                textColor="text-green-700"
              />
              <ActionButton
                icon={CheckCircle}
                text="Generate Portfolio"
                bgColor="bg-purple-100"
                borderColor="border-purple-300"
                textColor="text-purple-700"
              />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CareerDashboard;