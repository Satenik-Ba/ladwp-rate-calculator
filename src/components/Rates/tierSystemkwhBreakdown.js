import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableHead from "@mui/material/TableHead";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./timeOfUseRates.module.css";

function createData(tier, zone1M, zone1BM, zone2M, zone2BM) {
  return {
    tier,
    zone1M,
    zone1BM,
    zone2M,
    zone2BM,
  };
}

const kwhBreakdown = [
  createData(
    "Tier 1",
    "First 350 kWh",
    "First 700 kWh",
    "First 500 kWh",
    "First 1,000 kWh"
  ),
  createData(
    "Tier 2",
    "Next 700 kWh",
    "Next 1,400 kWh",
    "Next 1,000 kWh",
    "Next 2,000 kWh"
  ),
  createData(
    "Tier 3",
    "Above 1,050 kWh",
    "Above 2,100 kWh",
    "Above 1,500 kWh",
    "Above 3,000 kWh"
  ),
];

export default function TierSystemkwhBreakdown() {
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
                    Tier System Monthly and Bi-monthly kWh Breakdown by Zone
                  </h2>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  Zone 1
                </TableCell>
                <TableCell align="center" colSpan={2}>
                  Zone 2
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell></TableCell>
                <TableCell align="center">Monthly</TableCell>
                <TableCell align="center">Bi-Monthly</TableCell>
                <TableCell align="center">Monthly</TableCell>
                <TableCell align="center">Bi-Monthly</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {kwhBreakdown.map((elem) => (
                <TableRow
                  key={elem.tier}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {elem.tier}
                  </TableCell>
                  <TableCell align="center">{elem.zone1M}</TableCell>
                  <TableCell align="center">{elem.zone1BM}</TableCell>
                  <TableCell align="center">{elem.zone2M}</TableCell>
                  <TableCell align="center">{elem.zone2BM}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
