import { useState } from "react";

import Promotions from "../Promotions";
import { ITabs } from "../../types/interfaces";

function Tabs({ tabs }: ITabs) {
  const [activeTab, setActiveTab] = useState("All Promotions");

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
      <Promotions isNewCustomer={activeTab === "New Customers"} />
    </div>
  );
}

export default Tabs;
