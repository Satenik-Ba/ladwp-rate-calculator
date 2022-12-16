import React, { useContext, useEffect } from "react";
import { calculateTiers, CalculateTimeOfUse } from "./helper";
import TotalSumContext from "../../store/totalSum-context";
import Button from "../UI/button";

function Calculate() {
  const sumCtx = useContext(TotalSumContext);

  function handleCalculate(e) {
    e.preventDefault();

    sumCtx.totalSumTierFunc(calculateTiers(sumCtx.kwUsed));
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, sumCtx.kwUsed)
    );
  }

  useEffect(() => {
    sumCtx.totalSumTierFunc(calculateTiers(sumCtx.kwUsed));

    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, sumCtx.kwUsed)
    );
  }, [sumCtx]);

  return (
    <div>
      <Button onClick={handleCalculate}>Calculate</Button>
    </div>
  );
}

export default Calculate;
