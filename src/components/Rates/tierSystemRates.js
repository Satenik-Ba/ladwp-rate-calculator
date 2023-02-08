import React from "react";
import {
  TierOnePriceJan,
  TierTwoPriceJan,
  TierThreePriceJan,
  TierOnePriceApril,
  TierTwoPriceApril,
  TierThreePriceApril,
  TierOnePriceJune,
  TierTwoPriceJune,
  TierThreePriceJune,
  TierOnePriceJuly,
  TierTwoPriceJuly,
  TierThreePriceJuly,
  TierOnePriceOct,
  TierTwoPriceOct,
  TierThreePriceOct,
  PowerAccessChargeTierThree,
  PowerAccessChargeTierTwo,
  PowerAccessChargeTierOne,
} from "../../constants/constants";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./tierSystemRates.module.css";
import TierSystemkwhBreakdown from "./tierSystemkwhBreakdown";

function createData(
  month,
  tier1,
  tier2,
  tier3,
  PowerAccessChargeTierOne,
  PowerAccessChargeTierTwo,
  PowerAccessChargeTierThree
) {
  return {
    month,
    tier1,
    tier2,
    tier3,
    PowerAccessChargeTierOne,
    PowerAccessChargeTierTwo,
    PowerAccessChargeTierThree,
  };
}

const months = [
  createData(
    "Jan-March",
    TierOnePriceJan,
    TierTwoPriceJan,
    TierThreePriceJan,
    PowerAccessChargeTierOne / 2,
    PowerAccessChargeTierTwo / 2,
    PowerAccessChargeTierThree / 2
  ),
  createData(
    "April-May",
    TierOnePriceApril,
    TierTwoPriceApril,
    TierThreePriceApril,
    PowerAccessChargeTierOne / 2,
    PowerAccessChargeTierTwo / 2,
    PowerAccessChargeTierThree / 2
  ),
  createData(
    "June",
    TierOnePriceJune,
    TierTwoPriceJune,
    TierThreePriceJune,
    PowerAccessChargeTierOne / 2,
    PowerAccessChargeTierTwo / 2,
    PowerAccessChargeTierThree / 2
  ),
  createData(
    "July-Sept",
    TierOnePriceJuly,
    TierTwoPriceJuly,
    TierThreePriceJuly,
    PowerAccessChargeTierOne / 2,
    PowerAccessChargeTierTwo / 2,
    PowerAccessChargeTierThree / 2
  ),
  createData(
    "Oct - Dec",
    TierOnePriceOct,
    TierTwoPriceOct,
    TierThreePriceOct,
    PowerAccessChargeTierOne / 2,
    PowerAccessChargeTierTwo / 2,
    PowerAccessChargeTierThree / 2
  ),
];

export default function TierSystemRate() {
  return (
    <div>
      <div className={styles.wrapper}>
        {" "}
        <TableContainer component={Paper}>
          <Table sx={{ maxWidth: 640 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={7}>
                  <h2 className={styles.header}>
                    Tier System Standard Residential Rates
                  </h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={7}>
                  2022 - 2023
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">Month</TableCell>
                <TableCell align="center" colSpan={3}>
                  {`Total Consumption Charge (includes Adjustment Factors)`}
                </TableCell>
                <TableCell align="center" colSpan={3}>
                  Power Access Charge per Month
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Tier 1</TableCell>
                <TableCell align="center">Tier 2</TableCell>
                <TableCell align="center">Tier 3</TableCell>
                <TableCell align="center">Tier 1</TableCell>
                <TableCell align="center">Tier 2</TableCell>
                <TableCell align="center">Tier 3</TableCell>
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
                  <TableCell align="center">{month.tier1}</TableCell>
                  <TableCell align="center">{month.tier2}</TableCell>
                  <TableCell align="center">{month.tier3}</TableCell>
                  <TableCell align="center">
                    {month.PowerAccessChargeTierOne + "0"}
                  </TableCell>
                  <TableCell align="center">
                    {month.PowerAccessChargeTierTwo + "0"}
                  </TableCell>
                  <TableCell align="center">
                    {month.PowerAccessChargeTierThree + "0"}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <TierSystemkwhBreakdown />
    </div>
  );
}
