import React from 'react'
import styles from "./index.module.scss"
import Link from "next/link";
import Image from 'next/image';
import { CgSearch } from 'react-icons/cg'
// import greenlogo from "../../public/greenlogo2.png";

const index = () => {
  return (
   <>
     <nav className={styles.navbar}>
       <Link href="/">
         <a className={styles.navbar__logo}>
          <Image 
            src="/greenlogo2.png"
            alt="logo"
            width={60}
            height={60}
          />
         </a>
       </Link>
       <div className={styles.navbar__bars}><i className="fas fa-bars"></i></div>
       <div className={styles.navbar__menu}>
         <Link href="/categories"><a className={styles.navbar__menu__links}>Apps</a></Link>
         <Link href="#"><a className={styles.navbar__menu__links}>Creators</a></Link>
         <Link href="#"><a className={styles.navbar__menu__links}>Blog</a></Link>
         <Link href="#"><a className={styles.navbar__menu__links}>News</a></Link>
         <Link href="#"><a className={styles.navbar__menu__links}>Tutorials</a></Link>
         <CgSearch className={styles.searchIcon}/>
       </div>
     </nav>
   </>
  )
}

export default index;

 // <div>
    //   <nav id={styles.nav}>
    // <div className={styles.logo}>
    // <Link href="/">
    //   <a>
    //     <Image 
    //       src="/greenlogo2.png"
    //       alt="logo"
    //       width={60}
    //       height={60}
    //     />
    //   </a>
    // </Link>
    // </div>
    // <div className={styles.menu_container}>
    // <ul className={styles.navlinks}>
    //     <li><Link href="/categories"><a>Apps</a></Link></li>
    //     <li><Link href="#"><a>Creators</a></Link></li>
    //     <li><Link href="#"><a>Blog</a></Link></li>
    //     <li><Link href="#"><a>News</a></Link></li>
    //     <li><Link href="#"><a>Tutorials</a></Link></li>
    //     <li><span><div className={styles.searchBar}><button className={styles.searchBarSubmit} aria-label='submit search'><CgSearch id={styles.svg} /></button>
    //     <input type='text' class={styles.searchBarInput} aria-label='search'/></div></span></li>
    // </ul>
    // </div>
    // </nav>
    // </div>