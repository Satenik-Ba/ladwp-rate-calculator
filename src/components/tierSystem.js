import React, { useEffect, useState } from "react";
import styles from "./tierSystem.module.css";
import { calculateTiers } from "./Calculations/helper";
import Button from "../components/UI/button";

const TierSystem = ({ data }) => {
  const [result, setResult] = useState(0);

  const handleCalculate = (e) => {
    e.preventDefault();
    setResult(calculateTiers(parseInt(data)));
  };

  useEffect(() => {
    if (data === 0) {
      setResult(data);
    }
  }, [data]);

  return (
    <div className={styles.tier_wrapper}>
      <h2>Tier System</h2>
      <p>Tier 1 Energy: 1000kWh</p>
      <p>Tier 2 Energy: 2000kWh</p>
      <p>Tier 3 Energy: {">"}3000kWh</p>
      <h3>Total Sum: {result}$</h3>
      <Button onClick={handleCalculate} className={styles.btn}>
        Calculate
      </Button>
    </div>
  );
};

export default TierSystem;
