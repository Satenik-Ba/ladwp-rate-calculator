import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./calculationSummary.module.css";
import TotalSumContext from "../store/totalSum-context";

export default function CalculationSummaryTierSystem() {
  const sumCtx = useContext(TotalSumContext);

  function createData(category, calculation, amount) {
    return { category, calculation, amount };
  }

  const categoryBreakdown = [
    createData(
      "Tier 1",
      `${sumCtx.totalSumTier.tier1}kWh x ${sumCtx.totalSumTier.tier1Price}`,
      `$${sumCtx.totalSumTier.tier1Calc}`
    ),
    createData(
      "Tier 2",
      `${sumCtx.totalSumTier.tier2}kWh x ${sumCtx.totalSumTier.tier2Price}`,
      `$${sumCtx.totalSumTier.tier2Calc}`
    ),
    createData(
      "Tier 3",
      `${sumCtx.totalSumTier.tier3}kWh x ${sumCtx.totalSumTier.tier3Price}`,
      `$${sumCtx.totalSumTier.tier3Calc}`
    ),
    createData(
      "Power Access Charge",
      ``,
      `$ ${sumCtx.totalSumTier.powerAccessCharge}`
    ),
    createData("Tax", ``, `$${sumCtx.totalSumTier.tax}`),
    createData(
      "State Energy Surchage",
      ``,
      `$${sumCtx.totalSumTier.stateEnergySurcharge}`
    ),
    createData("Sum", ``, `$${sumCtx.totalSumTier.sum}`),
  ];

  return (
    <TableContainer component={Paper} className={styles.wrapper}>
      <h3>Tier System Price Summary</h3>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Category </TableCell>
            <TableCell align="left">kWh x Price </TableCell>
            <TableCell align="right">Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categoryBreakdown.map((category) => (
            <TableRow
              key={category.category}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="left">{category.category}</TableCell>
              <TableCell align="left">{category.calculation}</TableCell>
              <TableCell align="right">{category.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
