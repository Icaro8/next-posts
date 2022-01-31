import React from "react";
import { FaDog } from "react-icons/fa";

import { Login } from "../Login";

import styles from "./styles.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.containerTitle}>
        <FaDog />
        <h1>Petlover</h1>
      </div>
      <div>
        <Login />
      </div>
    </header>
  );
};
