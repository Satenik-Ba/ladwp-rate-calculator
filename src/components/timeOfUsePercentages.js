import React, { useState, useContext } from "react";
import TotalSumContext from "../store/totalSum-context";
import { CalculateTimeOfUse } from "./Calculations/helper";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import styles from "./timeOfUsePercentages.module.css";

const minDistance = 10;

export default function TimeOfUsePercentages() {
  const [value2, setValue2] = useState([30, 80]);

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
    <Box sx={{ width: 400 }}>
      <h2>Time Of Use Percentages</h2>
      <div className={styles.period_labels}>
        <span>Base</span>
        <span>High</span>
        <span>Low</span>
      </div>
      <Slider
        getAriaLabel={() => "Minimum distance shift"}
        value={value2}
        onChange={handleChange2}
        disableSwap
      />
      <div className={styles.period_labels}>
        <span>{sumCtx.timeOfUsePercentages[0]}</span>
        <span>{sumCtx.timeOfUsePercentages[1]}</span>
        <span>{sumCtx.timeOfUsePercentages[2]}</span>
      </div>
    </Box>
  );
}
