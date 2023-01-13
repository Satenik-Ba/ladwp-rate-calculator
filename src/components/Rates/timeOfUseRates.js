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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

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

function TimeOfUseRates() {
  return (
    <div>
      {" "}
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Month</TableCell>
              <TableCell align="right">Service Charge</TableCell>
              <TableCell align="right">High Peak</TableCell>
              <TableCell align="right">Low Peak</TableCell>
              <TableCell align="right">Base</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {months.map((month) => (
              <TableRow
                key={month.month}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {month.month}
                </TableCell>
                <TableCell align="right">{month.serviceCharge}</TableCell>
                <TableCell align="right">{month.highPeak}</TableCell>
                <TableCell align="right">{month.lowPeak}</TableCell>
                <TableCell align="right">{month.base}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default TimeOfUseRates;
