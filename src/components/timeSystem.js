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

export default function CalculationSummaryTimeOfUse() {
  const sumCtx = useContext(TotalSumContext);

  function createData(category, calculation, amount) {
    return { category, calculation, amount };
  }

  const categoryBreakdown = [
    createData(
      "Base",
      `${sumCtx.totalSumTime.basePerc}kWh x ${sumCtx.totalSumTime.basePrice}`,
      `$ ${sumCtx.totalSumTime.baseCalc}`
    ),
    createData(
      "High",
      `${sumCtx.totalSumTime.highPerc}kWh x ${sumCtx.totalSumTime.highPeakPrice}`,
      `$${sumCtx.totalSumTime.highCalc}`
    ),
    createData(
      "Low",
      `${sumCtx.totalSumTime.lowCalc}kWh x ${sumCtx.totalSumTime.lowPeakPrice} `,
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
    createData("Sum", ``, `$${sumCtx.totalSumTime.sum}`),
  ];

  return (
    <TableContainer component={Paper} className={styles.wrapper}>
      <h3>Time of Use Price Summary</h3>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">kWh x Price</TableCell>
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
              <TableCell align="left">{`${category.calculation}`}</TableCell>
              <TableCell align="right">{`${category.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
