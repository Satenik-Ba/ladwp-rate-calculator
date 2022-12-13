import React, { useState } from "react";
import styles from "./userInput.module.css";
import Button from "../components/UI/button";

function UserInput({ sendData, resetData, data }) {
  const [userInput, setUserInput] = useState("");

  function handleChange(e) {
    setUserInput(e.target.value);
    sendData(e.target.value);
  }

  function handleReset() {
    setUserInput("");
    resetData();
  }

  return (
    <div className={styles.container}>
      <p>Total kWh Used: </p>
      <input
        className={styles.userInput}
        type="text"
        placeholder=" kWh"
        onChange={handleChange}
        value={userInput}
      />

      <div>
        <Button onClick={handleReset} className={styles.resetBtn}>
          Reset
        </Button>
      </div>
    </div>
  );
}

export default UserInput;
