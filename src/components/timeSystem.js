import React, { useContext, useEffect, useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styles from "./calculationSummary.module.css";
import TotalSumContext from "../store/totalSum-context";
import CheckIcon from "@mui/icons-material/Check";

export default function CalculationSummaryTimeOfUse() {
  const sumCtx = useContext(TotalSumContext);

  const [betterOption, setBetterOption] = useState(false);

  function createData(category, calculation, amount) {
    return { category, calculation, amount };
  }

  const categoryBreakdown = [
    createData(
      "Base",
      `${sumCtx.totalSumTime.basePerc}kWh x $${sumCtx.totalSumTime.basePrice}`,
      `$${sumCtx.totalSumTime.baseCalc}`
    ),
    createData(
      "High",
      `${sumCtx.totalSumTime.highPerc}kWh x $${sumCtx.totalSumTime.highPeakPrice}`,
      `$${sumCtx.totalSumTime.highCalc}`
    ),
    createData(
      "Low",
      `${sumCtx.totalSumTime.lowCalc}kWh x $${sumCtx.totalSumTime.lowPeakPrice} `,
      `$${sumCtx.totalSumTime.lowCalc}`
    ),
    createData(
      "Time of Use Service Charge",
      ``,
      `$${sumCtx.totalSumTime.timeOfUseServiceCharge}`
    ),
    createData("Tax", ``, `$${sumCtx.totalSumTime.tax}`),
    createData(
      "State Energy Surchage",
      ``,
      `$${sumCtx.totalSumTime.stateEnergySurchage}`
    ),
    createData("Total", ``, `$${sumCtx.totalSumTime.sum}`),
  ];

  useEffect(() => {
    if (parseInt(sumCtx.totalSumTime.sum) < parseInt(sumCtx.totalSumTier.sum)) {
      setBetterOption(true);
    } else {
      setBetterOption(false);
    }
  }, [sumCtx.totalSumTier.sum, sumCtx.totalSumTime.sum]);

  return (
    <div
      className={styles.wrapper}
      style={{
        boxShadow: betterOption
          ? "2px 2px 4px 4px rgba(70, 119, 65, 0.9)"
          : "1px 1px 2px 2px rgba(65, 90, 119, 0.5)",
      }}
    >
      <p>Time of Use Price Summary {betterOption && <CheckIcon />}</p>
      <Table sx={{ borderTop: 0.5 }} aria-label="simple table">
        <TableBody>
          {categoryBreakdown.map((category) => (
            <TableRow
              key={category.category}
              sx={{
                "&:nth-child(6) td, &:nth-child(6) th": {
                  borderBottom: "2px dotted #003554",
                },
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell align="left">{category.category}</TableCell>
              <TableCell align="left">{`${category.calculation}`}</TableCell>
              <TableCell align="right">{`${category.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
