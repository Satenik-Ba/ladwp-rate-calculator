import React from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/userInput";
import Analysis from "./components/analysis";
import MonthSelection from "./components/monthSelection";
import styles from "./app.module.css";
import TimeOfUseRates from "./components/Rates/timeOfUseRates";
import TierSystemRates from "./components/Rates/tierSystemRates";
import TimeOfUsePercentages from "./components/timeOfUsePercentages";
import ZipCode from "./components/Zones/zones";
import HighestTierSystem from "./components/highestTierSystem";

function App() {
  return (
    <div className={styles.app}>
      <div>
        <div className={styles.pricingWrapper}>
          <Input />
          <MonthSelection />
          <ZipCode />
          <HighestTierSystem />
        </div>

        <TimeOfUsePercentages />
      </div>
      <Analysis />
      <div className={styles.wrapper}>
        <Tier />
        <Time />
      </div>
      <div className={styles.pricingWrapper}>
        <TierSystemRates />
        <TimeOfUseRates />
      </div>
    </div>
  );
}

export default App;
