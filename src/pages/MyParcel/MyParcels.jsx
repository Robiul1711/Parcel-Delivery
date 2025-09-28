import React, { useState } from "react";
import Active from "@/components/MyParcelsComponents/Active";
import Completed from "@/components/MyParcelsComponents/Completed";
import Posted from "@/components/MyParcelsComponents/Posted";

const MyParcels = () => {
  const [activeTab, setActiveTab] = useState("Posted");

  const tabs = [
    { label: "Posted", component: <Posted /> },
    { label: "Active", component: <Active /> },
    { label: "Completed", component: <Completed /> },
  ];

  return (
    <div className="section-padding-x py-8">
      {/* Tabs */}
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-14 py-4 rounded-[10px] shadow-custom text-2xl duration-300 ease-in-out border border-[#fff] 
              ${
                activeTab === tab.label
                  ? "bg-[#737373] text-white"
                  : "bg-transparent text-[#737373] hover:bg-[#737373] hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <div className="mt-6">
        {tabs.find((tab) => tab.label === activeTab)?.component}
      </div>
    </div>
  );
};

export default MyParcels;
