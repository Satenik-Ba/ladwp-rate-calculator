import React from "react";
import {
  HighPeakPriceJan,
  LowPeakPriceJan,
  BasePriceJan,
  TimeOfUseServiceCharge,
  HighPeakPriceApril,
  LowPeakPriceApril,
  BasePriceApril,
  HighPeakPriceJune,
  LowPeakPriceJune,
  BasePriceJune,
  HighPeakPriceJuly,
  LowPeakPriceJuly,
  BasePriceJuly,
  HighPeakPriceOct,
  LowPeakPriceOct,
  BasePriceOct,
} from "../../constants/constants";
import TimeOfUseTimes from "./timeOfUseTimes";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./timeOfUseRates.module.css";

function createData(month, serviceCharge, highPeak, lowPeak, base) {
  return { month, serviceCharge, highPeak, lowPeak, base };
}

const months = [
  createData(
    "Jan-March",
    TimeOfUseServiceCharge / 2,
    HighPeakPriceJan,
    LowPeakPriceJan,
    BasePriceJan
  ),
  createData(
    "April-May",
    TimeOfUseServiceCharge / 2,
    HighPeakPriceApril,
    LowPeakPriceApril,
    BasePriceApril
  ),
  createData(
    "June",
    TimeOfUseServiceCharge / 2,
    HighPeakPriceJune,
    LowPeakPriceJune,
    BasePriceJune
  ),
  createData(
    "July-Sept",
    TimeOfUseServiceCharge / 2,
    HighPeakPriceJuly,
    LowPeakPriceJuly,
    BasePriceJuly
  ),
  createData(
    "Oct - Dec",
    TimeOfUseServiceCharge / 2,
    HighPeakPriceOct,
    LowPeakPriceOct,
    BasePriceOct
  ),
];
export default function TimeOfUseRates() {
  return (
    <div>
      <div className={styles.wrapper}>
        {" "}
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 640 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  <h2 className={styles.header}>
                    Time of Use Residential Rates
                  </h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={5}>
                  2022 - 2023
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Month</TableCell>
                <TableCell align="center">Service Charge</TableCell>
                <TableCell align="center">High Peak</TableCell>
                <TableCell align="center">Low Peak</TableCell>
                <TableCell align="center">Base</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {months.map((month) => (
                <TableRow
                  key={month.month}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align="left">
                    {month.month}
                  </TableCell>
                  <TableCell align="center">{month.serviceCharge}</TableCell>
                  <TableCell align="center">{month.highPeak}</TableCell>
                  <TableCell align="center">{month.lowPeak}</TableCell>
                  <TableCell align="center">{month.base}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>

      <TimeOfUseTimes />
    </div>
  );
}
