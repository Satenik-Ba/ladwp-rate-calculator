import React from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/UserInput/userInput";
import Analysis from "./components/Calculations/analysis";
import MonthSelection from "./components/UserInput/monthSelection";
import styles from "./app.module.css";
import TimeOfUseRates from "./components/Rates/timeOfUseRates";
import TierSystemRates from "./components/Rates/tierSystemRates";
import TimeOfUsePercentages from "./components/timeOfUsePercentages";
import ZipCode from "./components/Zones/zones";
import HighestTierSystem from "./components/UserInput/highestTierSystem";
import Nav from "./components/Navigation/nav";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.input_wrapper}>
        <div className={styles.userInput}>
          <Input />
          <MonthSelection />
          <ZipCode />
          <HighestTierSystem />
        </div>
        <hr />
        <div className={styles.timeofusePercWrapper}>
          <TimeOfUsePercentages />
        </div>
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
