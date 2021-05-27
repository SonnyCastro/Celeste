import styles from "./index.module.css";
import Image from "next/image";
import Link from "next/link";

function FeaturedPick() {
  return (
    <div>
      <h1 className={styles.pickOfDay}>Celeste’s Pick of The Day</h1>
      <Image
        src="/line.svg"
        alt="logo"
        width={100}
        layout="responsive"
        height={10}
      />
      <section className={styles.sectionContainer}>
        <div className={styles.content_container}>
          <button className={styles.imgzoracat}>Art</button>

          <div id={styles.moveup}>
            <Image
              src="/featuredzora.svg"
              alt="logo"
              width={500}
              height={500}
              // layout="responsive"
              // objectFit="cover"
            />
          </div>
          <div className={styles.featured_content}>
            <h1 className={styles.featured_title}>ZORA</h1>
            <p className={styles.featured_subtitle}>
              Zora protocol enables artists to permissionlessly tokenize media
              on the blockchain by minting their own NFT markets.
            </p>
            <Link href="#categories">
              <a>
                <button className={styles.featured_visit_btn}>
                  Visit Zora.co
                </button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default FeaturedPick;
