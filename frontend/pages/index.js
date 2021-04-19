import Head from 'next/head'
import Image from "next/image";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import DeFiChart from "../components/DeFiChart";
// import Navbar from "../components/Navbar";

const Home = ({ topTenDefi }) => {
  return (
    <div className={styles.homeC}>
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
      <DeFiChart topTenDefi={topTenDefi}/>
      <h1 className={styles.test}>Celeste’s Pick of The Day</h1>
      <Image 
        src="/breakline.png"
        alt="logo"
        width={500}
        height={10}
      />
    </div>

    {/* Featured Pick Section */}
    <section className={styles.sectionContainer}>
      <div className={styles.content_container}>
      <button className={styles.imgzoracat}>Art</button>

        <div id={styles.moveup}>
          <Image 
            src="/ZL.png"
            alt="logo"
            width={400}
            height={400}
          />
        </div>
        <div className={styles.featured_content}>
          <h1 className={styles.featured_title}>ZORA</h1>
          <p className={styles.featured_subtitle}>Zora protocol enables artists to permissionlessly tokenize media on the blockchain by minting their own NFT markets.</p>
          <button className={styles.featured_visit_btn}>Visit Zora.co</button>
        </div>
      </div>
    </section>

    {/* new section */}
    <div className={styles.appsContainer}>
      <div className={styles.innerC}>
        <Link href="#DeFi">
          <a className={styles.menu_card}>
            <div className={styles.defi + " " + styles.menu_card_content}>
              <h1 className={styles.menu_title}>DeFi</h1>
              <p className={styles.menu_subtitle}> Decentralized Finance</p>
            </div>
          </a>
        </Link>

        <Link href="#DeFi">
          <a className={styles.menu_card}>
            <div className={styles.art + " " + styles.menu_card_content}>
              <h1 className={styles.menu_title}>Art</h1>
              <p className={styles.menu_subtitle}>Cryptomedia & NFTs</p>
            </div>
          </a>
        </Link>

        <Link href="#DeFi">
          <a className={styles.menu_card}>
            <div className={styles.social + " " + styles.menu_card_content}>
              <h1 className={styles.menu_title}>Social</h1>
              <p className={styles.menu_subtitle}>Tokens & Communities</p>
            </div>
          </a>
        </Link>

        <Link href="#DeFi">
          <a className={styles.menu_card}>
            <div className={styles.trade + " " + styles.menu_card_content}>
              <h1 className={styles.menu_title}>Trade</h1>
              <p className={styles.menu_subtitle}>Markets & Exchanges</p>
            </div>
          </a>
        </Link>
        <Link href="/categories"><a className={styles.link}>View Categories</a></Link>
      </div>
    </div>
    
    </div>
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