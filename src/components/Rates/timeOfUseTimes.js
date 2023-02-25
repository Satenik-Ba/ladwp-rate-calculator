import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./rateDialogTimeOfUse.module.css";
import { TableHead } from "@mui/material";

function createData(peakPeriod, times) {
  return { peakPeriod, times };
}

const months = [
  createData(
    "High Peak Period (20 hours per week)",
    "Monday through Friday 1:00 p.m. - 4:59 p.m."
  ),
  createData(
    "Low Peak Period (30 hours per week)",
    "Monday through Friday 10:00 a.m. - 12:59 p.m. 5:00 p.m. - 7:59 p.m."
  ),
  createData(
    "Base Period (118 hours per week)",
    "Monday through Friday 1:00 p.m. - 4:59 p.m.  All day Saturday and Sunday"
  ),
];

function TimeOfUseRates() {
  return (
    <div className={styles.wrapper}>
      {" "}
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={4}>
                <h2 className={styles.header}>Time of Use Time Periods</h2>
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {months.map((peakPeriod) => (
              <TableRow
                key={peakPeriod.peakPeriod}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row" align="left">
                  {peakPeriod.peakPeriod}
                </TableCell>
                <TableCell align="left">{peakPeriod.times}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TimeOfUseRates;
