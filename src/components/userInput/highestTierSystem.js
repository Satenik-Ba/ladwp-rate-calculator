import React, { useContext } from "react";
import TotalSumContext from "../../store/totalSum-context";
import { calculateTiers } from "../Calculations/helper";
import styles from "./highestTierSystem.module.css";

export default function HighestTierSystem() {
  const sumCtx = useContext(TotalSumContext);

  function handleSelect(e) {
    console.log(e.target.value);
    sumCtx.tierFunc(e.target.value);
    sumCtx.totalSumTierFunc(
      calculateTiers(sumCtx.kwUsed, e.target.value, sumCtx.zone)
    );
  }

  return (
    <div onChange={handleSelect} className={styles.wrapper}>
      <p>Highest Tier Past 12 Months</p>
      <div className={styles.tiers}>
        <div>
          <input type="radio" id="tier" name="highest-tier" value="tier1" />
          <label htmlFor="tier">Tier 1</label>
        </div>

        <div>
          <input type="radio" id="tier" name="highest-tier" value="tier2" />
          <label htmlFor="tier">Tier 2</label>
        </div>

        <div>
          <input type="radio" id="tier" name="highest-tier" value="tier3" />
          <label htmlFor="tier">Tier 3</label>
        </div>
      </div>
    </div>
  );
}
