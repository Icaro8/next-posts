import React from "react";
import Head from "next/head";

import { NavBar } from "../../components/NavBar";
import { Cards } from "../../components/Cards";

import styles from "./styles.module.scss";

const cats: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats</title>
      </Head>
      <div>
        <NavBar />
      </div>
      <div className={styles.containerImage}>
        <div>
          <h2>Section Cats</h2>
        </div>
      </div>
      <section>
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

export default cats;
