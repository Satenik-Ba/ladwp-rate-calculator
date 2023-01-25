import React, { useContext } from "react";
import styles from "./userInput.module.css";
import TotalSumContext from "../store/totalSum-context";
import { calculateTiers, CalculateTimeOfUse } from "./Calculations/helper";

function UserInput() {
  const sumCtx = useContext(TotalSumContext);

  function handleChange(e) {
    if (e.target.value === "") {
      sumCtx.kwUsedFunc(0);
      return;
    }
    sumCtx.kwUsedFunc(parseInt(e.target.value));
    sumCtx.totalSumTierFunc(calculateTiers(parseInt(e.target.value)));
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, parseInt(e.target.value))
    );
  }

  return (
    <div className={styles.container}>
      <p>Total kWh Usage: </p>
      <input
        className={styles.userInput}
        type="text"
        placeholder=" kWh"
        onChange={handleChange}
        value={sumCtx.kwUsed}
      />
    </div>
  );
}

export default UserInput;
