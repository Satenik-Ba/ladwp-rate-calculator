import React, { useContext } from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/userInput";
import Analysis from "./components/analysis";
import MonthSelection from "./components/monthSelection";
import styles from "./app.module.css";
import TimeOfUseRates from "./components/Rates/timeOfUseRates";
import TierSystemRates from "./components/Rates/tierSystemRates";
import CalculationSummaryTierSystem from "./components/Calculations/calculationSummaryTierSystem";
import CalculationSummaryTimeOfUse from "./components/Calculations/calculationSummaryTimeOfUse";
import TotalSumContext from "./store/totalSum-context";

function App() {
  const sumCtx = useContext(TotalSumContext);
  return (
    <div className={styles.app}>
      <Input />
      <div className={styles.pricingWrapper}>
        <TierSystemRates />
        <TimeOfUseRates />
      </div>
      <MonthSelection />
      <div className={styles.wrapper}>
        {sumCtx.kwUsed !== 0 && <CalculationSummaryTierSystem />}
        <Tier />
        <Time />
        {sumCtx.kwUsed !== 0 && <CalculationSummaryTimeOfUse />}
      </div>
      <Analysis />
    </div>
  );
}

export default App;
