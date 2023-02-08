import React, { useContext } from "react";
import styles from "./userInput.module.css";
import TotalSumContext from "../../store/totalSum-context";
import { calculateTiers, CalculateTimeOfUse } from "../Calculations/helper";

function UserInput() {
  const sumCtx = useContext(TotalSumContext);

  function handleChange(e) {
    if (e.target.value === "") {
      sumCtx.kwUsedFunc(0);
      sumCtx.totalSumTierFunc(calculateTiers(0), sumCtx.tier, sumCtx.zone);
      sumCtx.totalSumTimeFunc(
        CalculateTimeOfUse(sumCtx.timeOfUsePercentages, parseInt(0))
      );
      return;
    }
    sumCtx.kwUsedFunc(parseInt(e.target.value));
    sumCtx.totalSumTierFunc(
      calculateTiers(parseInt(e.target.value), sumCtx.tier, sumCtx.zone)
    );
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, parseInt(e.target.value))
    );
  }

  return (
    <div className={styles.wrapper}>
      <label htmlFor="kwhInput"> Total KWh Usage</label>
      <input
        id="kwhInput"
        className={styles.userInput}
        type="text"
        maxLength="6"
        placeholder=" kWh"
        onChange={handleChange}
        value={sumCtx.kwUsed}
      />
    </div>
  );
}

export default UserInput;
