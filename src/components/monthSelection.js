import React, { useContext } from "react";
import {
  monthSelect,
  CalculateTimeOfUse,
  calculateTiers,
} from "./Calculations/helper";
import TotalSumContext from "../store/totalSum-context";
import styles from "./monthSelection.module.css";

function MonthSelection() {
  const sumCtx = useContext(TotalSumContext);

  function handleSelect(e) {
    monthSelect(e.target.value);
    sumCtx.totalSumTierFunc(
      calculateTiers(sumCtx.kwUsed, sumCtx.tier, sumCtx.zone)
    );
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, sumCtx.kwUsed)
    );
  }

  return (
    <div>
      <label htmlFor="month" className={styles.selectLabel}>
        Month:
      </label>

      <select
        name="months"
        id="month"
        onChange={handleSelect}
        className={styles.label}
      >
        <option value="Jan" defaultChecked>
          Jan-March
        </option>
        <option value="April">April-May</option>
        <option value="June">June</option>
        <option value="July">July-Sept</option>
        <option value="Oct">Oct-Dec</option>
      </select>
    </div>
  );
}

export default MonthSelection;
