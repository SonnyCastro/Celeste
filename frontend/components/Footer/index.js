import styles from "./index.module.css";
import { FiArrowRight} from "react-icons/fi";
import Link from "next/link";

function Footer() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sign up to our newsletter</h1>
      <p className={styles.subtitle}>Be the first to learn about new products and gain free access to web3 insights.</p>
      {/* <FiArrowRight className={styles.icon}/> */}
      <input className={styles.input}type="text" placeholder="   yourname@example.com" />
      <FiArrowRight className={styles.icon}/>
      
      <div>
        <div className={styles.container2}>
          <Link href="#"><a className={styles.footerheading}>Resources</a></Link>
          <Link href="#"><a className={styles.footerheading}>Learn More</a></Link>
          <Link href="#"><a className={styles.footerheading}>Socials</a></Link>
        </div>
        <div className={styles.container2}>
          <Link href="#"><a className={styles.footersubheading}>Advertising</a></Link>
          <Link href="#"><a className={styles.footersubheading}>Get Featured</a></Link>
          <Link href="#"><a className={styles.footersubheading}>Twitter</a></Link>
        </div>
        <div className={styles.container2}>
          <Link href="#"><a className={styles.footersubheading}>Español</a></Link>
          <Link href="#"><a className={styles.footersubheading}>Blog</a></Link>
          <Link href="#"><a className={styles.footersubheading}>Telegram</a></Link>

        </div>
      </div>
    </div>
  )
}

export default Footer
