import React, { useContext } from "react";
import TotalSumContext from "../store/totalSum-context";
import { calculateTiers } from "./Calculations/helper";

export default function HighestTierSystem() {
  const sumCtx = useContext(TotalSumContext);

  function handleSelect(e) {
    sumCtx.tierFunc(e.target.value);
    sumCtx.totalSumTierFunc(
      calculateTiers(sumCtx.kwUsed, e.target.value, sumCtx.zone)
    );
  }

  return (
    <div>
      <label
        htmlFor="month"
        // className={styles.selectLabel}
      >
        Highest Tier System in the past 12 months :
      </label>

      <select
        name="months"
        id="month"
        onChange={handleSelect}
        // className={styles.label}
      >
        <option value="tier1" defaultChecked>
          Tier 1
        </option>
        <option value="tier2">Tier 2</option>
        <option value="tier3">Tier 3</option>
      </select>
    </div>
  );
}
