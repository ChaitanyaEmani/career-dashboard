// data/dashboardData.js
import {
  User,
  AlertTriangle,
  BookOpen,
  Heart,
  Mic,
  Plus,
  CheckCircle,
} from "lucide-react";

// Learning Analytics Data
export const learningData = [
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

// Wellbeing Analytics Data
export const wellbeingData = [
  { name: "Excellent", value: 35, color: "#10b981" },
  { name: "Poor", value: 5, color: "#ef4444" },
  { name: "Fair", value: 25, color: "#f59e0b" },
  { name: "Good", value: 35, color: "#3b82f6" },
];

// Stats Cards Data
export const statsData = [
  {
    title: "Portfolio Completion",
    value: "65%",
    icon: User,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    iconColor: "text-blue-500",
    iconBgColor: "bg-blue-200"
  },
  {
    title: "Courses Completed",
    value: "8",
    icon: BookOpen,
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
    iconColor: "text-green-500",
    iconBgColor: "bg-green-200"
  },
  {
    title: "Wellbeing Score",
    value: "7.8",
    icon: Heart,
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
    iconColor: "text-purple-500",
    iconBgColor: "bg-purple-200"
  },
  {
    title: "Interview Sessions",
    value: "12",
    icon: Mic,
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    iconColor: "text-orange-500",
    iconBgColor: "bg-orange-200"
  }
];

// Job Opportunities Data
export const jobOpportunities = [
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

// Recent Activities Data
export const recentActivities = [
  {
    title: 'Completed "React Fundamentals" course',
    time: "2 hours ago",
    color: "blue",
  },
  {
    title: "Updated profile education section",
    time: "1 day ago",
    color: "green",
  },
  {
    title: "Completed meditation session",
    time: "2 days ago",
    color: "purple",
  },
  {
    title: "Applied to Frontend Developer position",
    time: "3 days ago",
    color: "orange",
  },
  {
    title: "Completed AI interview practice",
    time: "5 days ago",
    color: "green",
  },
];

// Portfolio Items Data
export const portfolioItems = [
  {
    title: "Work Experience",
    status: "Add Now",
    icon: AlertTriangle,
    bgColor: "bg-red-50",
    borderColor: "border-red-200",
    textColor: "text-red-800"
  },
  {
    title: "Projects",
    status: "Add Now",
    icon: AlertTriangle,
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-800"
  },
  {
    title: "Languages",
    status: "Add Now",
    icon: CheckCircle,
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
    textColor: "text-blue-800"
  }
];

// Quick Actions Data
export const quickActions = [
  {
    icon: Plus,
    text: "Start Interview Practice",
    bgColor: "bg-blue-100",
    borderColor: "border-blue-500",
    textColor: "text-blue-800",
    onClick: () => console.log("Start Interview Practice")
  },
  {
    icon: BookOpen,
    text: "Browse Courses",
    bgColor: "bg-green-100",
    borderColor: "border-green-500",
    textColor: "text-green-800",
    onClick: () => console.log("Browse Courses")
  },
  {
    icon: CheckCircle,
    text: "Generate Portfolio",
    bgColor: "bg-purple-100",
    borderColor: "border-purple-500",
    textColor: "text-purple-800",
    onClick: () => console.log("Generate Portfolio")
  }
];