import React, { useState } from "react";
import Tier from "./components/tierSystem";
import Time from "./components/timeSystem";
import Input from "./components/userInput";
import Analysis from "./components/analysis";
import MonthSelection from "./components/monthSelection";
import styles from "./app.module.css";

function App() {
  const [data, setData] = useState(0);

  function sendData(userData) {
    setData(userData);
  }

  function resetData() {
    setData(0);
  }

  return (
    <div className={styles.app}>
      <Input sendData={sendData} resetData={resetData} data={data} />
      <MonthSelection />
      <div className={styles.wrapper}>
        <Tier data={data} />
        <Time data={data} resetData={resetData} />
      </div>
      <Analysis />
    </div>
  );
}

export default App;
