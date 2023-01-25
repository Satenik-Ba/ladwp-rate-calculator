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

export default function CalculationSummaryTierSystem() {
  const sumCtx = useContext(TotalSumContext);

  function createData(category, amount) {
    return { category, amount };
  }

  const categoryBreakdown = [
    createData(
      "Tier 1",
      `${sumCtx.totalSumTier[0]}kWh x ${sumCtx.totalSumTier[3]} :  ${Math.round(
        sumCtx.totalSumTier[0] * sumCtx.totalSumTier[3]
      )}`
    ),
    createData(
      "Tier 2",
      `${sumCtx.totalSumTier[1]}kWh x ${
        sumCtx.totalSumTier[4]
      }  :  ${Math.round(sumCtx.totalSumTier[1] * sumCtx.totalSumTier[4])}`
    ),
    createData(
      "Tier 3",
      `${sumCtx.totalSumTier[2]}kWh x ${
        sumCtx.totalSumTier[5]
      }  :  ${Math.round(sumCtx.totalSumTier[2] * sumCtx.totalSumTier[5])}`
    ),
    createData("Power Access Charge", `$ ${sumCtx.totalSumTier[6]}`),
    createData("Tax", `$ ${sumCtx.totalSumTier[7]}`),
    createData("State Energy Surchage", `$ ${sumCtx.totalSumTier[8]}`),
    createData("Sum", `$ ${sumCtx.totalSumTier[9]}`),
  ];

  return (
    <TableContainer component={Paper} className={styles.wrapper}>
      <h3>Tier System Price Summary</h3>
      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Category </TableCell>
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
              <TableCell align="center">{category.amount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
