import React, { useContext } from "react";
import styles from "./tierSystem.module.css";
import TotalSumContext from "../store/totalSum-context";

const TierSystem = () => {
  const sumCtx = useContext(TotalSumContext);

  return (
    <div className={styles.tier_wrapper}>
      <h2>Tier System</h2>
      <p>Tier 1 Energy: First 1000kWh</p>
      <p>Tier 2 Energy: Next 2000kWh</p>
      <p>Tier 3 Energy: {">"}3000kWh</p>
      <h3>Total Sum: $ {sumCtx.totalSumTier[9]}</h3>
    </div>
  );
};

export default TierSystem;
