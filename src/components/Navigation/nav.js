import React from "react";
import styles from "./nav.module.css";
import RateDialogTimeOfUse from "../Rates/rateDialogTimeOfUse";
import RateDialogTierSystem from "../Rates/rateDialogTierSystem";

function Nav() {
  return (
    <header>
      <ul className={styles.nav_icons}>
        <li>
          <a href="https://www.ladwp.com/ladwp/faces/ladwp?_adf.ctrl-state=8o5faaw1l_4&_afrLoop=1084258599966355">
            LADWP Website
          </a>
        </li>
        <li>
          <a href="https://www.ladwp.com/ladwp/faces/wcnav_externalId/a-fr-elecrate-schel?_adf.ctrl-state=8o5faaw1l_4&_afrLoop=1084163525934334">
            LADWP Residential Rates
          </a>
        </li>
        <li>
          <RateDialogTierSystem />
        </li>
        <li>
          <RateDialogTimeOfUse />
        </li>
      </ul>
    </header>
  );
}
export default Nav;
