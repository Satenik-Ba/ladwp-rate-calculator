import React, { useContext } from "react";
import TotalSumContext from "../store/totalSum-context";
import styles from "./analysis.module.css";

function Analysis() {
  const ctx = useContext(TotalSumContext);

  const savings =
    Math.max(ctx.totalSumTier[9], ctx.totalSumTime[8]) -
    Math.min(ctx.totalSumTier[9], ctx.totalSumTime[8]);

  const bestPlan =
    ctx.totalSumTier < ctx.totalSumTime ? "Tier System" : "Time Of Use";

  if (ctx.kwUsed) {
    return (
      <div className={styles.wrapper}>
        Based on the average total kWh usage, you can save{" "}
        <span className={styles.savings}>$ {savings}</span> by switching to{" "}
        <span className={styles.bestPlan}>{bestPlan} </span>
        rate plan.
      </div>
    );
  } else {
    return <></>;
  }
}

export default Analysis;
