import React from "react";
import { monthSelect } from "./Calculations/helper";
import styles from "./monthSelection.module.css";

function monthSelection() {
  function handleSelect(e) {
    monthSelect(e.target.value);
  }

  return (
    <div>
      <label htmlFor="month" className={styles.selectLabel}>
        Choose a Month:
      </label>

      <select
        name="months"
        id="month"
        onChange={handleSelect}
        className={styles.label}
      >
        <option value="Jan" defaultChecked>
          Jan-March
        </option>
        <option value="April">April-May</option>
        <option value="June">June</option>
        <option value="July">July-Sept</option>
        <option value="Oct">Oct-Dec</option>
      </select>
    </div>
  );
}

export default monthSelection;
