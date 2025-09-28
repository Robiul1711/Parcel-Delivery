import AddParcels from "@/components/send-parcel-components/AddParcels";
import ExploreTours from "@/components/send-parcel-components/ExploreTours";
import React, { useState } from "react";

const SendParcel = () => {
  const [activeTab, setActiveTab] = useState("Add Parcel");

  const tabs = [
    { label: "Add Parcel", component: <AddParcels /> },
    { label: "Explore existing tours", component: <ExploreTours /> },
  ];
  return (
    <div className="section-padding-x py-6">
      <div className="flex gap-4">
        {tabs.map((tab) => (
          <button
            key={tab.label}
            onClick={() => setActiveTab(tab.label)}
            className={`px-14 py-3 rounded-[10px] shadow-custom text-lg duration-300 ease-in-out border
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

      <div className="mt-8">
        {tabs.find((tab) => tab.label === activeTab).component}
      </div>
    </div>
  );
};

export default SendParcel;
