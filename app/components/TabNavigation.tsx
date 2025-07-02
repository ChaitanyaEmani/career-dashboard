"use client";

interface TabNavigationProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}


const tabs: string[] = [
  "Profile View",
  "Education",
  "Work Experience",
  "Projects",
  "Certifications",
  "Languages",
  "Links",
];

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, setActiveTab }) => {


  return (
    <div className="bg-white rounded-lg w-full overflow-x-auto">
      <nav className="flex flex-wrap sm:flex-nowrap gap-4 sm:gap-6 pt-4 px-4 whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`relative cursor-pointer pb-2 sm:pb-5 text-sm sm:text-md font-medium transition-colors duration-200 ${
              activeTab === tab
                ? "text-green-900 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-green-900"
                : "text-gray-400"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default TabNavigation;
