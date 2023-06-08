import React from "react";
import styles from "../../styles/Header.module.scss";
import { Section } from "../constants";

export const Header: React.VFC = () => {
  
  return (
    <nav className={styles.nav}>
      <a href={`#${Section.About}`} className={styles.navButton}>About</a>
      <a href={`#${Section.Career}`} className={styles.navButton}>Career</a>
      <a href={`#${Section.Skills}`} className={styles.navButton}>Skills</a>
    </nav>
  );
};
