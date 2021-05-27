import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

function UpcomingEvents() {
  return (
    <div className={styles.container2}>
      <h1 className={styles.test}>Events</h1>
      <Image
        src="/line.svg"
        alt="logo"
        width={100}
        height={10}
        layout="responsive"
      />

      <div className={styles.a}>
        <div className={styles.b}>
          <div className={styles.innerb}>
            <div className={styles.innerbdate}>08.01.21</div>
          </div>
          <div className={styles.innerb2}>
            <h1 className={styles.innerb2Title}>Devcon Colombia</h1>
            <p className={styles.innerb2SubTitle}>
              Now that we’re well into the new year, our Devcon team wanted to
              share....
            </p>
            <div className={styles.innerb2btn}>
              <Link href="#news">
                <a>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
        {/* 2nd event */}
        <div className={styles.b}>
          <div className={styles.innerb}>
            <div className={styles.innerbdate}>08.01.21</div>
          </div>
          <div className={styles.innerb2}>
            <h1 className={styles.innerb2Title}>Devcon Colombia</h1>
            <p className={styles.innerb2SubTitle}>
              Now that we’re well into the new year, our Devcon team wanted to
              share....
            </p>
            <div className={styles.innerb2btn}>
              <Link href="#news">
                <a>Learn More</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingEvents;
