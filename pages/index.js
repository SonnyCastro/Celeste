import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import UpcomingEvents from "../components/UpcomingEvents";
import DeFiChart from "../components/DeFiChart";
import FeaturedPick from "../components/FeaturedPick";
import CategorySlides from "../components/CategorySlides";
import Tweets from "../components/Tweets";

const Home = ({ topTenDefi }) => {
  return (
    <>
      <Head>
        <title>Celeste</title>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
          integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id={styles.header}>
        <div className={styles.banner}>
          <h1 id={styles.banner_title}>
            Celeste finds the top <span id={styles.web3}>Web3</span>{" "}
            Applications
          </h1>
          <div className={styles.subtitle}>
            <p>
              Find your place in the metaverse and discover practical
              cryptocurrency use cases to earn and save money.
            </p>
          </div>

          <div className={styles.btnContainer}>
            <Link href="/categories">
              <a className={styles.btn1}>Get Started</a>
            </Link>
            <Link href="#">
              <a className={styles.btn2}>Get Featured</a>
            </Link>
          </div>
        </div>
      </section>

      {/* home content */}
      <div className={styles.homeC}>
        <div>
          <h1 className={styles.test}>Check Price In Real Time</h1>
          <Image
            src="/line.svg"
            alt="logo"
            width={100}
            layout="responsive"
            height={5}
          />
          <p className={styles.toptenheading}>
            Top 10 Most Popular DeFi Assets
          </p>
          <DeFiChart topTenDefi={topTenDefi} />
          <FeaturedPick />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <CategorySlides />
          </div>
          <Tweets />
          <UpcomingEvents />
        </div>
      </div>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const api = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&category=decentralized_finance_defi&order=market_cap_desc&page=1&sparkline=true`;
  const res = await fetch(api);
  const defi = await res.json();
  // console.log(defi)
  let topTenDefi = defi.slice(0, 10);

  // Pass post data to the page via props
  return { props: { topTenDefi } };
}
