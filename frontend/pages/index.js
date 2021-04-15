import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css'
// import Navbar from "../components/Navbar";

const Home = ({ topTenDefi }) => {
  return (
    <>
    <header className={styles.container}>
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
          <button className={styles.behind_btn1}>Get Started</button>
          <div></div>
          <button className={styles.behind_btn2}>Get Featured</button>
        </div>
        
    </header>
    <div className={styles.container2}>
      <h1 className={styles.test}>Check Price In Real Time</h1>
      <Image 
        src="/breakline.png"
        alt="logo"
        width={500}
        height={10}
      />
      <p style={{marginBottom: "25px", marginTop:"15px"}}>Top 10 Most Popular DeFi Assets</p>
      {topTenDefi.map((defi) => {
        return (
          <div className={styles.defiContainer} id={defi.id} key={defi.id}>
            <div><Image 
              className={styles.defiImg}
              src={defi.image}
              alt="logo"
              width={30}
              height={30}
            />
            </div>
            <p className={styles.symbol}>{defi.symbol}</p>
            {/* <p className={styles.symbol2}>{defi.symbol}</p> */}
            <p className={styles.currentPrice}>${defi.current_price.toFixed(2)}</p>
            {defi.price_change_percentage_24h < 0 ? 
          (<p className={styles.currentPriceChange, styles.red}>{defi.price_change_percentage_24h.toFixed(2)}%</p>)
          :( <p className={styles.currentPriceChange, styles.green}>{defi.price_change_percentage_24h.toFixed(2)}%</p>)}
            {/* <p className={styles.currentPriceChange}>{defi.price_change_percentage_24h.toFixed(2)}</p> */}
          </div>
        )
      })}
      <h1 className={styles.test}>Celeste’s Pick of The Day</h1>
      <Image 
        src="/breakline.png"
        alt="logo"
        width={500}
        height={10}
      />
    </div>
    
    </>
  )
}

export default Home;


export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance_defi&order=market_cap_desc&page=1&sparkline=true`
  const res = await fetch(api)
  const defi = await res.json()
  // console.log(defi)
  let topTenDefi = defi.slice(0,10)
  console.log(topTenDefi)

  // Pass post data to the page via props
  return { props: { topTenDefi } }
}