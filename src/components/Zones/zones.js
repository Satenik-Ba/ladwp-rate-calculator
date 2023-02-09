import React, { useContext } from "react";
import {
  allZipCodes,
  zone1ZipCodes,
  zone2ZipCodes,
} from "../../constants/constants";
import TotalSumContext from "../../store/totalSum-context";
import { calculateTiers } from "../Calculations/helper";
import styles from "./zones.module.css";

export default function ZipCode() {
  const sumCtx = useContext(TotalSumContext);

  const handleChange = (event) => {
    if (zone1ZipCodes.find((element) => element == event.target.value)) {
      sumCtx.zoneFunc("zone1");
      sumCtx.totalSumTierFunc(
        calculateTiers(sumCtx.kwUsed, sumCtx.tier, "zone1")
      );
    } else if (zone2ZipCodes.find((element) => element == event.target.value)) {
      sumCtx.zoneFunc("zone2");
      sumCtx.totalSumTierFunc(
        calculateTiers(sumCtx.kwUsed, sumCtx.tier, "zone2")
      );
    }
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="location">Location</label>
      <select
        name="location"
        id="location"
        placeholder="Zip Codes"
        required
        onChange={handleChange}
        className={styles.zipCode_select}
      >
        {allZipCodes.map((zip) => (
          <option value={zip} key={zip}>
            {zip}
          </option>
        ))}
      </select>
    </div>
  );
}
