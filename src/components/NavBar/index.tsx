import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import styles from "./styles.module.scss";

export const NavBar: React.FC = () => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <nav className={styles.containerNav}>
      <ul>
        <li>
          <Link href="/">
            <a className={path === "/" ? styles.active : ""}>All Pets</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Dogs</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a>Cats</a>
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
