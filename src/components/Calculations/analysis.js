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
    parseInt(ctx.totalSumTier.sum) < parseInt(ctx.totalSumTime.sum)
      ? "Tier System"
      : "Time Of Use";

  if (ctx.kwUsed) {
    return (
      <Div className={styles.wrapper}>
        Based on the total average kWh usage,{" "}
        <span className={styles.bestPlan}>{bestPlan} </span> rate plan can save
        you up to
        <span className={styles.savings}>$ {savings.toFixed(2)}</span> per pay
        period.
      </Div>
    );
  } else {
    return <></>;
  }
}

export default Analysis;
