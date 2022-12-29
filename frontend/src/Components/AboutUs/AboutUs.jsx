import React from "react";
import styles from "./AboutUs.module.css";
import Contacts from "./Contacts";
import History from "./History";

const AboutUs = () => {
  return (
    <div className={styles.about}>
      <Contacts />
      <History/>
    </div>
  );
};

export default AboutUs;
