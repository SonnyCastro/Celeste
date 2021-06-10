import styles from "./index.module.css";
import Link from "next/link";

function CategorySlides() {
  return (
    <>
      <Link href="#DeFi">
        <a className={styles.menu_card}>
          <div className={styles.defi + " " + styles.menu_card_content}>
            <h1 className={styles.menu_title}>DeFi</h1>
            <p className={styles.menu_subtitle}> Decentralized Finance</p>
          </div>
        </a>
      </Link>

      <Link href="#Art">
        <a className={styles.menu_card}>
          <div className={styles.art + " " + styles.menu_card_content}>
            <h1 className={styles.menu_title}>Art</h1>
            <p className={styles.menu_subtitle}>Cryptomedia & NFTs</p>
          </div>
        </a>
      </Link>

      <Link href="#Social">
        <a className={styles.menu_card}>
          <div className={styles.social + " " + styles.menu_card_content}>
            <h1 className={styles.menu_title}>Social</h1>
            <p className={styles.menu_subtitle}>Tokens & Communities</p>
          </div>
        </a>
      </Link>

      <Link href="#Trade">
        <a className={styles.menu_card}>
          <div className={styles.trade + " " + styles.menu_card_content}>
            <h1 className={styles.menu_title}>Trade</h1>
            <p className={styles.menu_subtitle}>Markets & Exchanges</p>
          </div>
        </a>
      </Link>
      <Link href="/categories">
        <a className={styles.link}>View Categories</a>
      </Link>
    </>
  );
}

export default CategorySlides;
