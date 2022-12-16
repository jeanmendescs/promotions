import Tabs from "./components/Tabs";
import "./styles.scss";

function App() {
  return (
    <div>
      <Tabs currentTab="allPromotions" tabs={["allPromotions", "NewCustomers"]}>
        <div>teste</div>
      </Tabs>
    </div>
  );
}

export default App;
