import "./App.css";
import TabSwitch from "./components/TabSwitch";
import { tabsData } from "./utils/componentData";
const App = () => {
  const defaultActiveTab = 1;
  return (
    <div className="max-w-5xl m-auto px-10 py-3 text-[#6F7177]">
      <TabSwitch defaultActiveTab={defaultActiveTab} tabsData={tabsData} />
    </div>
  );
};

export default App;
