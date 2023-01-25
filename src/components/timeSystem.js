import React, { useContext } from "react";
import { adjustRange } from "../components/Calculations/helper";
import styles from "./timeSystem.module.css";
import TotalSumContext from "../store/totalSum-context";

const TimeSystem = () => {
  const sumCtx = useContext(TotalSumContext);

  function handleBaseChange(e) {
    let result = adjustRange(
      +e.target.value,
      sumCtx.timeOfUsePercentages,
      e.target.name
    );
    sumCtx.timeofuseFunc(result);
  }

  function handleHighChange(e) {
    let result = adjustRange(
      +e.target.value,
      sumCtx.timeOfUsePercentages,
      e.target.name
    );
    sumCtx.timeofuseFunc(result);
  }

  function handleLowChange(e) {
    let result = adjustRange(
      +e.target.value,
      sumCtx.timeOfUsePercentages,
      e.target.name
    );
    sumCtx.timeofuseFunc(result);
  }
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
          value={sumCtx.timeOfUsePercentages[0]}
          onChange={handleBaseChange}
        />
        <p>{sumCtx.timeOfUsePercentages[0] + "%"}</p>
      </div>

      <div className={styles.userInput}>
        <label htmlFor="high" className={styles.label}>
          High Peak
        </label>
        <input
          type="range"
          id="high"
          name="high"
          min={0}
          max={100}
          step={2}
          value={sumCtx.timeOfUsePercentages[1]}
          onChange={handleHighChange}
        />
        <p>{sumCtx.timeOfUsePercentages[1] + "%"}</p>
      </div>

      <div className={styles.userInput}>
        <label htmlFor="low" className={styles.label}>
          Low Peak
        </label>
        <input
          type="range"
          id="low"
          name="low"
          min={0}
          max={100}
          step={2}
          value={sumCtx.timeOfUsePercentages[2]}
          onChange={handleLowChange}
        />
        <p>{sumCtx.timeOfUsePercentages[2] + "%"}</p>
      </div>

      <h3>Total Sum: $ {sumCtx.totalSumTime[8]}</h3>
    </div>
  );
};

export default TimeSystem;
