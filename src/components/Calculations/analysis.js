import React, { useContext } from "react";
import TotalSumContext from "../../store/totalSum-context";
import styles from "./analysis.module.css";
import { styled } from "@mui/material/styles";

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
}));

function Analysis() {
  const ctx = useContext(TotalSumContext);

  const savings =
    Math.max(ctx.totalSumTier.sum, ctx.totalSumTime.sum) -
    Math.min(ctx.totalSumTier.sum, ctx.totalSumTime.sum);

  const bestPlan =
    ctx.totalSumTier.sum < ctx.totalSumTime.sum ? "Tier System" : "Time Of Use";

  if (ctx.kwUsed) {
    return (
      <Div className={styles.wrapper}>
        Based on the average total kWh usage, you can save{" "}
        <span className={styles.savings}>$ {savings.toFixed(2)}</span> by
        switching to
        {""}
        <span className={styles.bestPlan}>{bestPlan} </span> rate plan.
      </Div>
    );
  } else {
    return <></>;
  }
}

export default Analysis;
