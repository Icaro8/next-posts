import React from "react";

import styles from "./styles.module.scss";

export const Cards: React.FC = () => {
  return (
    <div className={styles.container}>
      <div>
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallup.net%2Fwp-content%2Fuploads%2F2018%2F10%2F06%2F336068-puppy-dog-pitbull.jpg&f=1&nofb=1"
          alt="dog"
        />
      </div>
      <div className={styles.containertext}>
        <strong className={styles.name}>Name</strong>
        <p>Breed: Boxer</p>
        <p>Color: Tain</p>
        <p>Gender: female</p>
      </div>
    </div>
  );
};
