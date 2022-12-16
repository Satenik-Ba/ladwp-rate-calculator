import React from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/userInput";
import Analysis from "./components/analysis";
import MonthSelection from "./components/monthSelection";
import styles from "./app.module.css";
import Calculate from "../src/components/Calculations/calculate";

function App() {
  return (
    <div className={styles.app}>
      <Input />
      <MonthSelection />
      <div className={styles.wrapper}>
        <Tier />
        <Time />
      </div>
      <Calculate />
      <Analysis />
    </div>
  );
}

export default App;
