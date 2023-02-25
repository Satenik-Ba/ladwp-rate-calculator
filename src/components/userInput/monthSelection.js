import React, { useContext, useEffect, useState } from "react";
import {
  monthSelect,
  CalculateTimeOfUse,
  calculateTiers,
} from "../Calculations/helper";
import TotalSumContext from "../../store/totalSum-context";
import styles from "./monthSelection.module.css";

function MonthSelection() {
  const sumCtx = useContext(TotalSumContext);
  const [selectedJan, setSelectedJan] = useState(false);
  const [selectedApril, setSelectedApril] = useState(false);
  const [selectedJune, setSelectedJune] = useState(false);
  const [selectedJuly, setSelectedJuly] = useState(false);
  const [selectedOct, setSelectedOct] = useState(false);

  function handleSelect(e) {
    monthSelect(e.target.value);
    sumCtx.totalSumTierFunc(
      calculateTiers(sumCtx.kwUsed, sumCtx.tier, sumCtx.zone)
    );
    sumCtx.totalSumTimeFunc(
      CalculateTimeOfUse(sumCtx.timeOfUsePercentages, sumCtx.kwUsed)
    );
  }

  useEffect(() => {
    const date = new Date();
    let monthNum = date.getMonth();
    if (monthNum === 0 || monthNum === 1 || monthNum === 2) {
      setSelectedJan(true);
    } else if (monthNum === 3 || monthNum === 4) {
      setSelectedApril(true);
    } else if (monthNum === 5) {
      setSelectedJune(true);
    } else if (monthNum === 6 || monthNum === 7 || monthNum === 8) {
      setSelectedJuly(true);
    } else if (monthNum === 9 || monthNum === 10 || monthNum === 11) {
      setSelectedOct(true);
    }
  }, []);

  return (
    <div className={styles.wrapper}>
      <label htmlFor="month">Month</label>

      <select
        name="months"
        id="month"
        onChange={handleSelect}
        className={styles.month_select}
      >
        <option value="Jan" selected={selectedJan}>
          Jan-March
        </option>
        <option value="April" selected={selectedApril}>
          April-May
        </option>
        <option value="June" selected={selectedJune}>
          June
        </option>
        <option value="July" selected={selectedJuly}>
          July-Sept
        </option>
        <option value="Oct" selected={selectedOct}>
          Oct-Dec
        </option>
      </select>
    </div>
  );
}

export default MonthSelection;
