import React, { useState, useEffect } from "react";
import {
  adjustRange,
  CalculateTimeOfUse,
} from "../components/Calculations/helper";
import Button from "../components/UI/button";
import styles from "./timeSystem.module.css";

const TimeSystem = ({ data }) => {
  const [percent, setPercent] = useState([50, 20, 30]);
  const [totalSum, setTotalSum] = useState(0);

  function handleBaseChange(e) {
    let result = adjustRange(+e.target.value, percent, e.target.name);
    setPercent(result);
  }

  function handleHighChange(e) {
    let result = adjustRange(+e.target.value, percent, e.target.name);
    setPercent(result);
  }

  function handleLowChange(e) {
    let result = adjustRange(+e.target.value, percent, e.target.name);
    setPercent(result);
  }
  function handleCalculate(e) {
    e.preventDefault();
    setTotalSum(Math.round(CalculateTimeOfUse(percent, parseInt(data))));
  }

  useEffect(() => {
    if (data === 0) {
      setPercent([50, 20, 30]);
      setTotalSum(0);
    }
  }, [data]);

  return (
    <div className={styles.time_wrapper}>
      <h2>Time Of Use</h2>
      <div className={styles.userInput}>
        <label htmlFor="base" className={styles.label}>
          Base
        </label>
        <input
          type="range"
          id="base"
          name="base"
          min={0}
          max={100}
          step={2}
          value={percent[0]}
          onChange={handleBaseChange}
        />
        <p>{percent[0] + "%"}</p>
      </div>

      <div className={styles.userInput}>
        <label htmlFor="high" className={styles.label}>
          High Peak
        </label>
        <input
          type="range"
          id="high"
          name="high"
          min="0"
          max="100"
          step="2"
          value={percent[1]}
          onChange={handleHighChange}
        />
        <p>{percent[1] + "%"}</p>
      </div>

      <div className={styles.userInput}>
        <label htmlFor="low" className={styles.label}>
          Low Peak
        </label>
        <input
          type="range"
          id="low"
          name="low"
          min="0"
          max="100"
          step="2"
          value={percent[2]}
          onChange={handleLowChange}
        />
        <p>{percent[2] + "%"}</p>
      </div>

      <h3>Total Sum: {totalSum}$</h3>
      <Button onClick={handleCalculate} className={styles.btn}>
        Calculate
      </Button>
    </div>
  );
};

export default TimeSystem;
