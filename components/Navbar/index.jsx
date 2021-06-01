import React from "react";
import styles from "./index.module.scss";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
// import { CgSearch } from "react-icons/cg";
// import greenlogo from "../../public/greenlogo2.png";

const index = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <Link href="/">
            <a className={styles.navlogo}>
              <Image src="/celeste.png" width={40} height={40} />
            </a>
          </Link>
          <ul
            className={
              isOpen === false
                ? styles.navmenu
                : styles.navmenu + " " + styles.active
            }
          >
            <li className={styles.navitem}>
              <Link href="/categories">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Apps
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/#">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Creators
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/#">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Blog
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/#">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  News
                </a>
              </Link>
            </li>
            <li className={styles.navitem}>
              <Link href="/#">
                <a
                  className={
                    isOpen === false
                      ? styles.navlink
                      : styles.navlink + " " + styles.active
                  }
                  onClick={openMenu}
                >
                  Tutorials
                </a>
              </Link>
            </li>
          </ul>
          <button
            className={
              isOpen === false
                ? styles.hamburger
                : styles.hamburger + " " + styles.active
            }
            onClick={openMenu}
          >
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
          </button>
        </nav>
      </header>
    </>
  );
};

export default index;
