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
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

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

export default function TierSystemRate() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleClickOpen}
        className={styles.btn}
      >
        Tier System Rates
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
          Tier System Standard Residential Rates
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <div className={styles.wrapper}>
            {" "}
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Month</TableCell>
                    <TableCell align="center" colSpan={3}>
                      {`Total Consumption Charge (includes Adjustment Factors)`}
                    </TableCell>
                    <TableCell align="center" colSpan={3}>
                      Power Access Charge per Month
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell></TableCell>
                    <TableCell align="right">Tier 1</TableCell>
                    <TableCell align="right">Tier 2</TableCell>
                    <TableCell align="right">Tier 3</TableCell>
                    <TableCell align="right">Tier 1</TableCell>
                    <TableCell align="right">Tier 2</TableCell>
                    <TableCell align="right">Tier 3</TableCell>
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
                      <TableCell align="right">{month.tier1}</TableCell>
                      <TableCell align="right">{month.tier2}</TableCell>
                      <TableCell align="right">{month.tier3}</TableCell>
                      <TableCell align="right">
                        {month.PowerAccessChargeTierOne + "0"}
                      </TableCell>
                      <TableCell align="right">
                        {month.PowerAccessChargeTierTwo + "0"}
                      </TableCell>
                      <TableCell align="right">
                        {month.PowerAccessChargeTierThree + "0"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
