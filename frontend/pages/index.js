import Head from 'next/head'
import styles from '../styles/Home.module.css'
// import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
    <div className={styles.container}>
      <Head>
        <title>Celeste</title>
          <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossorigin="anonymous"
          />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className={styles.banner}>
          <h1 className={styles.banner_title}>Celeste finds the top <span id={styles.web3}>Web3</span> Applications</h1>
          <div className={styles.subtitle}>
            <p>Find your place in the metaverse and discover practical cryptocurrency use cases to earn and save money.</p>
          </div>
          <div></div>
          <button>Get Started</button>
          <div></div>
          <button>Get Featured</button>
        </div>
    </div>
    <div className={styles.container2}>
      <h1>hello</h1>
    </div>
    </>
  )
}

export default Home;