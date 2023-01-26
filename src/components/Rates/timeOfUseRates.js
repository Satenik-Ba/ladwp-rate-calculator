import React, { useState } from "react";
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
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./timeOfUseRates.module.css";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import ToggleButton from "@mui/material/ToggleButton";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

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
  const [open, setOpen] = useState(false);
  const [timePeriodsOpen, setTimePeriodsOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setTimePeriodsOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.btn}
      >
        Time of Use Rates
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        maxWidth="750"
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Time Of Use Residential Rates
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className={styles.wrapper}>
            {" "}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell align="center" colSpan={5}>
                      Year - 2023
                    </TableCell>
                  </TableRow>
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
          <ToggleButton
            className={styles.btn}
            value="check"
            selected={timePeriodsOpen}
            onClick={() => {
              setTimePeriodsOpen(!timePeriodsOpen);
            }}
          >
            Time Periods
          </ToggleButton>
          {timePeriodsOpen && <TimeOfUseTimes />}
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
