import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription } from "@/components/ui/alert";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area,
} from "recharts";
import {
  User,
  AlertTriangle,
  BookOpen,
  Heart,
  Mic,
  Plus,
  Eye,
  Play,
  Calendar,
  FileText,
  CheckCircle,
} from "lucide-react";

export default function CareerDashboard() {
  // Sample data for charts
  const learningData = [
    { month: "Jan", courses: 3, hours: 15 },
    { month: "Feb", courses: 4, hours: 25 },
    { month: "Mar", courses: 3, hours: 22 },
    { month: "Apr", courses: 6, hours: 32 },
    { month: "May", courses: 7, hours: 35 },
    { month: "Jun", courses: 6, hours: 28 },
  ].map((item) => ({
    ...item,
    difference: item.hours - item.courses,
  }));

  const wellbeingData = [
    { name: "Excellent", value: 35, color: "#10b981" },

    { name: "Poor", value: 5, color: "#ef4444" },
    { name: "Fair", value: 25, color: "#f59e0b" },

    { name: "Good", value: 35, color: "#3b82f6" },
  ];

  const jobOpportunities = [
    {
      title: "Frontend Developer",
      company: "TechCorp Inc.",
      salary: "$75,000",
      posted: "2 days ago",
    },
    {
      title: "React Developer",
      company: "StartupXYZ",
      salary: "$80,000",
      posted: "3 days ago",
    },
    {
      title: "Full Stack Engineer",
      company: "InnovateLab",
      salary: "$90,000",
      posted: "5 days ago",
    },
    {
      title: "Cloud Engineer",
      company: "Hiron AI",
      salary: "$180,000",
      posted: "7 days ago",
    },
  ];

  const recentActivities = [
    {
      title: 'Completed "React Fundamentals" course',
      time: "2 hours ago",
      type: "course",
      color: "blue",
    },
    {
      title: "Updated profile education section",
      time: "1 day ago",
      type: "profile",
      color: "green",
    },
    {
      title: "Completed meditation session",
      time: "2 days ago",
      type: "wellbeing",
      color: "purple",
    },
    {
      title: "Applied to Frontend Developer position",
      time: "3 days ago",
      type: "application",
      color: "orange",
    },
    {
      title: "Completed AI interview practice",
      time: "5 days ago",
      type: "interview",
      color: "green",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Morning, Ankit
          </h1>
          <p className="text-gray-600">
            Welcome back! Here's your career development overview.
          </p>
        </div>

        {/* Profile Completion Alert */}
        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertDescription>
            <div className="flex items-start gap-3 mb-3">
              <AlertTriangle size={20} className="text-yellow-600" />
              <div className="flex flex-col gap-1">
                <span className="font-medium text-yellow-800">
                  Complete Your Profile
                </span>
                <p className="text-yellow-700 mb-3">
                  Your profile is 65% complete. Add missing sections to improve
                  your portfolio.
                </p>
                <div className="w-[280px] sm:w-[400px] md:w-[750px] lg:w-[1100px] xl:w-[1130px] h-2 bg-yellow-200 rounded">
                  <div
                    className="h-full bg-amber-800 rounded"
                    style={{ width: "65%" }}
                  />
                </div>
              </div>
            </div>
          </AlertDescription>
        </Alert>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="bg-blue-50 border-blue-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Portfolio Completion
                  </p>
                  <p className="text-3xl font-bold text-gray-900">65%</p>
                </div>
                <User className="h-9 w-10 text-blue-500 bg-blue-200 p-1 rounded" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-green-50 border-green-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Courses Completed
                  </p>
                  <p className="text-3xl font-bold text-gray-900">8</p>
                </div>
                <BookOpen className="h-9 w-10 text-green-500 bg-green-200 p-1 rounded" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-purple-50 border-purple-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">Wellbeing Score</p>
                  <p className="text-3xl font-bold text-gray-900">7.8</p>
                </div>
                <Heart className="h-9 w-9 text-purple-500 bg-purple-200 p-2 rounded" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-orange-50 border-orange-200">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 mb-1">
                    Interview Sessions
                  </p>
                  <p className="text-3xl font-bold text-gray-900">12</p>
                </div>
                <Mic className="h-9 w-9 text-orange-500 bg-orange-200 p-1 rounded" />
              </div>
            </CardContent>
          </Card>
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
                <div className="flex items-center justify-between p-3 bg-red-50 border border-red-200 rounded-lg">
                  <span className="flex text-red-800 gap-2">
                    <AlertTriangle size={20} className="text-red-800" />
                    <p>Work Experience</p>
                  </span>
                  <p className="text-red-800 font-semibold">Add Now</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <span className="flex text-yellow-800 gap-2">
                    <AlertTriangle size={20} className="text-yellow-800" />
                    <p>Projects</p>
                  </span>
                  <p className="text-yellow-800 font-semibold">Add Now</p>
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 border border-blue-200 rounded-lg">
                  <span className="flex text-blue-800 gap-2">
                    <CheckCircle size={20} className="text-blue-800" />
                    <p>Languages</p>
                  </span>
                  <p className="text-blue-800 font-semibold">Add Now</p>
                </div>
              </CardContent>
            </Card>

            {/* Learning Analytics */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                  Learning Analytics
                </CardTitle>
                <Button variant="link" className="text-blue-600 text-sm p-0">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={learningData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                      <XAxis
                        dataKey="month"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#666" }}
                      />
                      <YAxis
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#666" }}
                      />
                      <Tooltip />
                      <Area
                        type="monotone"
                        dataKey="difference"
                        stackId="1"
                        stroke="#10b981"
                        fill="#d1fae5"
                        strokeWidth={3}
                        name="Study Hours"
                      />
                      <Area
                        type="monotone"
                        dataKey="courses"
                        stroke="#1e3a8a"
                        fill="#bfdbfe"
                        strokeWidth={3}
                        name="Courses Completed"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex items-center justify-center gap-8 mt-4">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 border-2 bg-blue-100 border-blue-800 py-2 px-6"></div>
                    <span className="text-md text-gray-600">
                      Courses Completed
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-2 border-2 bg-green-100 border-green-800 py-2 px-6"></div>
                    <span className="text-md text-gray-600">Study Hours</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Wellbeing Analytics */}
              <Card className="h-full">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Wellbeing Analytics</CardTitle>
                  <Button variant="link" className="text-blue-600 text-sm">
                    View Details
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="h-48 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={wellbeingData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={70}
                          dataKey="value"
                        >
                          {wellbeingData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-green-800 rounded-lg"></div>
                      <span className="text-md text-gray-600">Excellent</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-blue-800 rounded-lg"></div>
                      <span className="text-md text-gray-600">Good</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-amber-500 rounded-lg"></div>
                      <span className="text-md text-gray-600">Fair</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-600 rounded-lg"></div>
                      <span className="text-md text-gray-600">Poor</span>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Meditation Streak</span>
                      <span className="font-medium">7 days</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Average Mood</span>
                      <span className="font-medium">8.2/10</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Stress Level</span>
                      <span className="font-medium text-green-600">Low</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

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
                      <div key={index} className="flex items-start space-x-3">
                        <div
                          className={`w-2 h-2 rounded-full mt-2 ${
                            activity.color === "blue"
                              ? "bg-blue-500"
                              : activity.color === "green"
                              ? "bg-green-500"
                              : activity.color === "purple"
                              ? "bg-purple-500"
                              : activity.color === "orange"
                              ? "bg-orange-500"
                              : "bg-gray-500"
                          }`}
                        ></div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">
                            {activity.title}
                          </p>
                          <p className="text-xs text-gray-500 mt-1">
                            {activity.time}
                          </p>
                        </div>
                      </div>
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
                  <div
                    key={index}
                    className="p-4 border border-gray-200 rounded-lg"
                  >
                    <h3 className="font-medium text-gray-900 mb-1">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">{job.company}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-green-600">
                        {job.salary}
                      </span>
                      <span className="text-xs text-gray-500">
                        {job.posted}
                      </span>
                    </div>
                  </div>
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
                <Button
                  className="w-full bg-blue-100 justify-start border border-blue-500 text-blue-800 font-medium"
                  variant="outline"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Start Interview Practice
                </Button>
                <Button
                  className="w-full bg-green-100 justify-start border border-green-500 text-green-800 font-medium"
                  variant="outline"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Browse Courses
                </Button>
                <Button
                  className="w-full bg-purple-100 justify-start border border-purple-500 text-purple-800 font-medium"
                  variant="outline"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Generate Portfolio
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
