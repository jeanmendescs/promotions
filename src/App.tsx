import Tabs from "./components/Tabs";
import { ITabs } from "./types/interfaces";
import "./styles.scss";

const tabs = ["All Promotions", "New Customers"] as ITabs["tabs"];

function App() {
  return (
    <div className="app">
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
