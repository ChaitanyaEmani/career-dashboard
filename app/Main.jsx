// CareerDashboard.jsx
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Import all components
import Header from "./components/Header";
import ProfileCompletionAlert from "./components/ProfileCompletionAlert";
import StatsCard from "./components/StatsCard";
import JobCard from "./components/JobCard";
import ActivityItem from "./components/ActivityItem";
import PortfolioItem from "./components/PortfolioItem";
import ActionButton from "./components/ActionButton";
import LearningAnalytics from "./components/LearningAnalytics";
import WellbeingAnalytics from "./components/WellbeingAnalytics";

// Import all data
import {
  statsData,
  jobOpportunities,
  recentActivities,
  portfolioItems,
  quickActions,
  learningData,
  wellbeingData,
} from "./data/dashboardData";

const CareerDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Header userName="Ankit" />

        {/* Profile Completion Alert */}
        <ProfileCompletionAlert 
          completionPercentage={65}
          title="Complete Your Profile"
          description="Your profile is 65% complete. Add missing sections to improve your portfolio."
        />

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {statsData.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Complete Your Portfolio */}
            <Card>
              <CardHeader>
                <CardTitle>Complete Your Portfolio</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {portfolioItems.map((item, index) => (
                  <PortfolioItem key={index} {...item} />
                ))}
              </CardContent>
            </Card>

            {/* Learning Analytics */}
            <LearningAnalytics data={learningData} />

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Wellbeing Analytics */}
              <WellbeingAnalytics data={wellbeingData} />

              {/* Recent Activity */}
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-lg font-semibold">
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivities.map((activity, index) => (
                      <ActivityItem key={index} {...activity} />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-1 space-y-8 flex flex-col justify-between">
            {/* Top Job Opportunities */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Top Job Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                {jobOpportunities.map((job, index) => (
                  <JobCard key={index} {...job} />
                ))}
                <p className="w-full text-center text-green-800 font-medium mt-4">
                  View All Opportunities
                </p>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="flex-1">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickActions.map((action, index) => (
                  <ActionButton key={index} {...action} />
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerDashboard;