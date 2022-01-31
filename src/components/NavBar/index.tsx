import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./styles.module.scss";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  console.log(path);
  return (
    <nav className={styles.containerNav}>
      <ul>
        <li>
          <Link href="/">
            <a className={path === "/" ? styles.active : ""}>All Pets</a>
          </Link>
        </li>
        <li>
          <Link href="/dogs">
            <a className={path === "/dogs" ? styles.active : ""}>Dogs</a>
          </Link>
        </li>
        <li>
          <Link href="/cats">
            <a className={path === "/cats" ? styles.active : ""}>Cats</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Rabbits</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Birds</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
