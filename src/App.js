import React from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/UserInput/userInput";
import MonthSelection from "./components/UserInput/monthSelection";
import styles from "./app.module.css";
import TimeOfUsePercentages from "./components/timeOfUsePercentages";
import ZipCode from "./components/UserInput/zones";
import HighestTierSystem from "./components/UserInput/highestTierSystem";
import Nav from "./components/Navigation/nav";

function App() {
  return (
    <div className={styles.app}>
      <Nav />
      <div className={styles.wrapper}>
        <div className={styles.userInput}>
          <Input />
          <MonthSelection />
          <ZipCode />
          <HighestTierSystem />
          <TimeOfUsePercentages />
        </div>
      </div>
      <div className={styles.summary_wrapper}>
        <Tier />
        <Time />
      </div>
    </div>
  );
}

export default App;
