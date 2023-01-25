import React from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/userInput";
import Analysis from "./components/analysis";
import MonthSelection from "./components/monthSelection";
import styles from "./app.module.css";
import TimeOfUseRates from "./components/Rates/timeOfUseRates";
import TierSystemRates from "./components/Rates/tierSystemRates";
import TimeOfUseTimes from "./components/Rates/timeOfUseTimes";
import CalculationSummaryTierSystem from "./components/Calculations/calculationSummaryTierSystem";
import CalculationSummaryTimeOfUse from "./components/Calculations/calculationSummaryTimeOfUse";

function App() {
  return (
    <div className={styles.app}>
      <Input />
      <div className={styles.pricingWrapper}>
        <TierSystemRates />
        <TimeOfUseRates />
        <TimeOfUseTimes />
      </div>
      <div className={styles.wrapper}>
        <CalculationSummaryTierSystem />
        <CalculationSummaryTimeOfUse />
      </div>
      <MonthSelection />
      <div className={styles.wrapper}>
        <Tier />
        <Time />
      </div>
      <Analysis />
    </div>
  );
}

export default App;
