import React, { useContext, useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import styles from "./calculationSummary.module.css";
import TotalSumContext from "../store/totalSum-context";
import CheckIcon from "@mui/icons-material/Check";
import Analysis from "./Calculations/analysis";

export default function CalculationSummaryTierSystem() {
  const sumCtx = useContext(TotalSumContext);

  const [betterOption, setBetterOption] = useState(false);

  function createData(category, calculation, amount) {
    return { category, calculation, amount };
  }

  const categoryBreakdown = [
    createData(
      "Tier 1",
      `${sumCtx.totalSumTier.tier1}kWh x $${sumCtx.totalSumTier.tier1Price}`,
      `$${sumCtx.totalSumTier.tier1Calc}`
    ),
    createData(
      "Tier 2",
      `${sumCtx.totalSumTier.tier2}kWh x $${sumCtx.totalSumTier.tier2Price}`,
      `$${sumCtx.totalSumTier.tier2Calc}`
    ),
    createData(
      "Tier 3",
      `${sumCtx.totalSumTier.tier3}kWh x $${sumCtx.totalSumTier.tier3Price}`,
      `$${sumCtx.totalSumTier.tier3Calc}`
    ),
    createData(
      "Power Access Charge",
      ``,
      `$${sumCtx.totalSumTier.powerAccessCharge}`
    ),
    createData("Tax", ``, `$${sumCtx.totalSumTier.tax}`),
    createData(
      "State Energy Surchage",
      ``,
      `$${sumCtx.totalSumTier.stateEnergySurcharge}`
    ),
    createData("Total", ``, `$${sumCtx.totalSumTier.sum}`),
  ];

  useEffect(() => {
    if (parseInt(sumCtx.totalSumTier.sum) < parseInt(sumCtx.totalSumTime.sum)) {
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
          ? "2px 2px 2px 2px rgba(70, 119, 65, 0.9)"
          : "1px 1px 2px 2px rgba(65, 90, 119, 0.5)",
      }}
    >
      {betterOption && <Analysis />}
      <p>
        Tier System Price Summary{" "}
        {betterOption && (
          <CheckIcon
            sx={{
              color: "rgb(70, 119, 65)",
              fontSize: "1.5rem",
            }}
          />
        )}
      </p>

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
              <TableCell align="left">{category.calculation}</TableCell>
              <TableCell align="right">{category.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
