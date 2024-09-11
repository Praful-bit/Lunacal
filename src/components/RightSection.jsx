import { useState } from "react";
import Gallery from "./Gallery";
import Tabs from "./Tabs";

const RightSection = () => {
  const [activeTab, setActiveTab] = useState("aboutMe");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col h-full gap-4">
      <div className="h-1/2">
        <Tabs activeTab={activeTab} onTabClick={handleTabClick} />
      </div>

      <div className="h-1/2">
        <Gallery />
      </div>
    </div>
  );
};

export default RightSection;
