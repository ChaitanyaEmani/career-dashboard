import { Camera, Briefcase,FileBadge,LinkedinIcon, Target, Lightbulb, Code2, Link} from "lucide-react";
import Header from "../components/commonComponents/Header";
import HeaderBox from "../components/commonComponents/HeaderBox";
import Sidebar from "../components/commonComponents/Sidebar";
import InfoBox from "../components/commonComponents/InfoBox";
import ChartCard from "../components/commonComponents/ChartCard";
import DataPairCard from "../components/commonComponents/DataPairCard";
import LearningAnalytics from "../components/commonComponents/LearningAnalytics";
import ActivityItem from "../components/ActivityItem";
import SuggestionCard from "../components/SuggestionsCard";
import StatsCard from "../components/commonComponents/StatsCard";


export default function Portfolio() {
  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-50 pt-5 sm:pt-10 pb-20 sm:pb-6 px-6">
        <div className="max-w-7xl mx-auto">
          <Header
            userName="Portfolio Generator"
            text="Create a professional AI-generated portfolio to share with recruiters"
          />
          <HeaderBox
            icon={Lightbulb}
            text1="AI-Powered Portfolio Creation"
            text2="Our AI analyzes your profile data and creates a professional portfolio optimized for your target roles."
            btn1="Generate Portfolio"
            bgColor="bg-gradient-to-r from-purple-50 to-blue-50"
            borderColor="border-purple-100"
            iconbgColor="bg-purple-600"
            textColor="text-purple-800"
            btnbgColor="bg-purple-600"
            textbtnColor="text-white"
            iconTextColor="text-white"
          />

          <div className="border my-8 rounded-lg bg-white">
            <InfoBox
              title="Your Portfolio Status"
              subtitle={
                <span className="flex flex-wrap gap-4 items-center">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Last updated: 2 hours ago
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-gray-700" />
                    Profile completeness: 85%
                  </span>
                </span>
              }
              btn1="Preview"
              btn2="Regenerate"
              bgColor="bg-gray-800"
              bgColor1="bg-green-800"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4">
            {/* Left card */}
            <div className="border bg-white rounded-lg flex flex-col gap-3 p-4 h-full">
              <ChartCard title="Portfolio Analytics" />
              <DataPairCard
                val1={1247}
                val2={89}
                val3={23}
                val4={4.8}
                text1="Total Views"
                text2="Profile Downloads"
                text3="Contact Inquiries"
                text4="Average Rating"
                category="portfolio"
              />
              <LearningAnalytics
                data={[
                  { month: "Jan", courses: 110, difference: 5 },
                  { month: "Feb", courses: 180, difference: 10 },
                  { month: "Mar", courses: 260, difference: 25 },
                  { month: "Apr", courses: 500, difference: 30 },
                  { month: "May", courses: 190, difference: 15 },
                  { month: "Jun", courses: 300, difference: 20 },
                ]}
                text1="Portfolio Views"
                text2="Profile Downloads"
              />
            </div>

            {/* Right card */}
            <div className="border bg-white rounded-lg flex flex-col gap-3 p-5 h-full">
              <p className="text-lg font-semibold">Recent Activity</p>
              <ActivityItem
                title="Portfolio viewed by TechCorp Recruiter"
                time="2 hours ago"
                color="blue"
              />
              <ActivityItem
                title="Contact form submission from StartupXYZ"
                time="5 hours ago"
                color="green"
              />
              <ActivityItem
                title="Portfolio shared on LinkedIn"
                time="1 day ago"
                color="purple"
              />
              <ActivityItem
                title="Profile downloaded by Design Agency"
                time="2 days ago"
                color="orange"
              />
              <ActivityItem
                title="Portfolio featured in job board"
                time="3 days ago"
                color="red"
              />
              <ActivityItem
                title="Open to work status updated"
                time="3 days ago"
                color="yellow"
              />
            </div>
          </div>
          {/* suggestions cards */}
          <div className="my-8">
            <HeaderBox
              icon={Lightbulb}
              text1="AI Portfolio Suggestions"
              text2="Personalized recommendations to improve your portfolio"
              bgColor="bg-white"
              borderColor="border-gray-100"
              iconbgColor="bg-purple-200"
              textColor="text-gray-800"
              btnbgColor="bg-blue-500"
              textbtnColor="text-white"
              iconTextColor="text-purple-800"
              // omit btns here if not needed
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <SuggestionCard
                  icon={Briefcase}
                  bgColor="bg-blue-50"
                  iconColor="text-blue-600"
                  title="Add Work Experience"
                  subtitle="Your portfolio would benefit from detailed work using the STAR method."
                  text="Add Experience"
                  textColor="text-blue-800"
                  textColor1="text-blue-500"
                />
                <SuggestionCard
                  icon={Target}
                  bgColor="bg-green-50"
                  iconColor="text-green-600"
                  title="Highlight Skills"
                  subtitle="Consider adding more technical skills to match current job market trends."
                  text="Update Skills"
                  textColor="text-green-800"
                  textColor1="text-green-500"
                />
                <SuggestionCard
                  icon={Camera}
                  bgColor="bg-yellow-50"
                  iconColor="text-yellow-600"
                  title="Professional Photo"
                  subtitle="A professional headshot can increase portfolio engagement by 40%"
                  text="Upload Photo"
                  textColor="text-amber-800"
                  textColor1="text-amber-500"
                />
              </div>
            </HeaderBox>
          </div>

          {/* Export and Share options */}
          <div className="border rounded-lg bg-white p-4.5 flex flex-col gap-3">
            <p className="font-semibold">Export & Share Options</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-3 ">
              <StatsCard
                title="Export PDF"
                icon={FileBadge}
                bgColor="bg-white"
                textColor="text-red-500"
                subtitle="Download as PDF"
                category="portfolio"
              />
              <StatsCard
                title="Share LinkedIn"
                icon={LinkedinIcon}
                bgColor="bg-white"
                textColor="text-blue-600"
                subtitle="Post to LinkedIn"
                category="portfolio"
              />
              <StatsCard
                title="Copy Link"
                icon={Link}
                bgColor="bg-white"
                textColor="text-green-600"
                subtitle="Share portfolio URL"
                category="portfolio"
              />
              <StatsCard
                title="Embed Code"
                icon={Code2}
                bgColor="bg-white"
                textColor="text-purple-600"
                subtitle="Get Embed Code"
                category="portfolio"
              />
            </div>
          </div>


        </div>
      </div>
    </>
  );
}
