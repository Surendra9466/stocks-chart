import { useState } from "react";

const TabSwitch = ({defaultActiveTab, tabsData}) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab || 0);
  console.log(tabsData, 'tabsData');
  const handleClick = (e) => {
    const {target} = e;
    setActiveTab(Number(target.id))
  };
  return (
    <>
    <div className="flex gap-8 items-center cursor-pointer  border-0 border-b-[1px] border-b-[#EFF1F3] mb-6">
      {tabsData?.map((item) => {
        return (
          <div key={item.id} className={`text-lg pb-5 border-0 border-b-[3px] border-transparent ${activeTab === item.id ? 'border-0 border-b-[3px] border-b-[#4B40EE]' : ''}`} id={item.id} onClick={handleClick}>
            {item.label}
          </div>
        );
      })}
    </div>
    <>{tabsData[activeTab].component}</>
    </>
  );
};

export default TabSwitch;
