import React from "react";
import Head from "next/head";

import { NavBar } from "../../components/NavBar";
import { Cards } from "../../components/Cards";

import styles from "./styles.module.scss";

const Dogs: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Dog</title>
      </Head>
      <div>
        <NavBar />
      </div>
      <div className={styles.containerimage}>
        <div>
          <h2>Section Dogs</h2>
        </div>
      </div>
      <section className={styles.containerCards}>
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </section>
    </div>
  );
};

export default Dogs;
