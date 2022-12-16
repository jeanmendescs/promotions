import { useState } from "react";
import "./styles.scss";

interface ITabs {
  tabs: string[];
  currentTab: string;
  children: React.ReactNode;
}

function Tabs({ currentTab, tabs, children }: ITabs) {
  const [activeTab, setActiveTab] = useState(() => currentTab);

  return (
    <div className="tabs">
      <div className="tabs__container">
        {tabs.map((tab) => (
          <button
            className={`tab ${activeTab === tab ? "tab--active" : ""}`}
            key={tab}
            onClick={() => setActiveTab(tab)}
            type="button"
          >
            {tab}
          </button>
        ))}
      </div>
      {children}
    </div>
  );
}

export default Tabs;
