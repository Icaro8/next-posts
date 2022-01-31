import React from "react";
import Head from "next/head";

import { NavBar } from "../../components/NavBar";
import { Cards } from "../../components/Cards";
import { Header } from "../../components/Header";

import styles from "./styles.module.scss";

const cats: React.FC = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Cats</title>
      </Head>
      <div>
        <Header />
        <NavBar />
      </div>
      <div className={styles.containerImage}>
        <div>
          <h2>Section Cats</h2>
        </div>
      </div>
      <h1>Cats Only</h1>
      <section className={styles.contaienrcards}>
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
