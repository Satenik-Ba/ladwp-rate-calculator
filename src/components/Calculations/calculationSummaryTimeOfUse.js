import React, { useContext } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import styles from "./calculationSummary.module.css";
import TotalSumContext from "../../store/totalSum-context";

export default function CalculationSummaryTimeOfUse() {
  const sumCtx = useContext(TotalSumContext);

  function createData(category, calculation, amount) {
    return { category, calculation, amount };
  }

  const categoryBreakdown = [
    createData(
      "Base",
      `${sumCtx.totalSumTime[0]}kWh x ${sumCtx.totalSumTime[3]}`,
      `$${Math.round(sumCtx.totalSumTime[0] * sumCtx.totalSumTime[3])}`
    ),
    createData(
      "High",
      `${sumCtx.totalSumTime[1]}kWh x ${sumCtx.totalSumTime[4]}`,
      `$${Math.round(sumCtx.totalSumTime[1] * sumCtx.totalSumTime[4])}`
    ),
    createData(
      "Low",
      `${sumCtx.totalSumTime[2]}kWh x ${sumCtx.totalSumTime[5]} `,
      `$${Math.round(sumCtx.totalSumTime[2] * sumCtx.totalSumTime[5])}`
    ),
    createData("Tax", ``, `$${sumCtx.totalSumTime[6]}`),
    createData("Time of Use Service Charge", ``, `$${sumCtx.totalSumTime[7]}`),
    createData("State Energy Surchage", ``, `$${sumCtx.totalSumTier[8]}`),
    createData("Sum", ``, `$${sumCtx.totalSumTime[8]}`),
  ];

  return (
    <TableContainer component={Paper} className={styles.wrapper}>
      <h3>Time of Use Price Summary</h3>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category</TableCell>
            <TableCell align="center">kWh x Price</TableCell>
            <TableCell align="center">Amount</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {categoryBreakdown.map((category) => (
            <TableRow
              key={category.category}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {category.category}
              </TableCell>
              <TableCell align="center">{`${category.calculation}`}</TableCell>
              <TableCell align="center">{`${category.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
