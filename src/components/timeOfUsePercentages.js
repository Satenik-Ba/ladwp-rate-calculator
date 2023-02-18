import React, { useState, useContext } from "react";
import TotalSumContext from "../store/totalSum-context";
import { CalculateTimeOfUse } from "./Calculations/helper";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./timeOfUsePercentages.module.css";

const minDistance = 10;

export default function TimeOfUsePercentages() {
  const [value2, setValue2] = useState([50, 70]);

  const sumCtx = useContext(TotalSumContext);

  const handleChange2 = (e, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (newValue[1] - newValue[0] < minDistance) {
      if (activeThumb === 0) {
        const clamped = Math.min(newValue[0], 100 - minDistance);
        setValue2([clamped, clamped + minDistance]);
      } else {
        const clamped = Math.max(newValue[1], minDistance);
        setValue2([clamped - minDistance, clamped]);
      }
    } else {
      setValue2(newValue);
    }
    sumCtx.timeofuseFunc([
      e.target.value[0],
      100 - (e.target.value[0] + (100 - e.target.value[1])),
      100 - e.target.value[1],
    ]);
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(
        [
          e.target.value[0],
          100 - (e.target.value[0] + (100 - e.target.value[1])),
          100 - e.target.value[1],
        ],
        sumCtx.kwUsed
      )
    );
  };

  return (
    <div className={styles.header}>
      <p>Time Of Use Percentage Breakdown</p>
      <Box sx={{ width: 350 }}>
        <div className={styles.period_labels}>
          <p>Base</p>
          <p>High</p>
          <p>Low</p>
        </div>
        <Slider value={value2} onChange={handleChange2} disableSwap />
        <div className={styles.period_labels}>
          <p>{`${sumCtx.timeOfUsePercentages[0]}%`}</p>
          <p>{`${sumCtx.timeOfUsePercentages[1]}%`}</p>
          <p>{`${sumCtx.timeOfUsePercentages[2]}%`}</p>
        </div>
      </Box>
    </div>
  );
}
