import React, { useContext } from "react";
import Button from "../UI/button";
import { calculateTiers, CalculateTimeOfUse } from "./helper";
import TotalSumContext from "../../store/totalSum-context";

function Calculate() {
  const sumCtx = useContext(TotalSumContext);

  function handleCalculate(e) {
    e.preventDefault();
    sumCtx.totalSumTierFunc(calculateTiers(sumCtx.kwUsed));
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, sumCtx.kwUsed)
    );
  }
  return (
    <div>
      <Button onClick={handleCalculate}>Calculate</Button>
    </div>
  );
}

export default Calculate;
