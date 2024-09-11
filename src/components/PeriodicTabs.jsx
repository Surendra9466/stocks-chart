import React, { useState } from "react";
import { graphData } from "../mockApiData/index";
import { periodTabs } from "../utils/constants";
export const PeriodicTabs = ({ setActiveGraph }) => {
  const [activeTab, setActiveTab] = useState("1D");

  const handleClick = (e) => {
    const { target } = e;

    if (target?.id) {
      setActiveTab(target?.id);
      setActiveGraph(graphData[target?.id]);
    }
  };
  return (
    <div className="flex text-[#6F7177] gap-8 mt-8" onClick={handleClick}>
      {periodTabs.map((item) => {
        return (
          <div
            key={item.id}
            className={`cursor-pointer px-3.5 py-1 rounded ${
              activeTab === item.id ? "bg-[#4B40EE] text-white" : ""
            }`}
            id={item.id}
          >
            {item.label}
          </div>
        );
      })}
    </div>
  );
};
