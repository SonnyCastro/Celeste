import styles from "../../../styles/individualAsset.module.css";
const individualAsset = ({ asset }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{asset.name} Overview</h1>
      <hr
        style={{ color: "white", border: "1px solid white", width: "100%" }}
      />
      <p className={styles.what + " " + styles.why}>What is {asset.name}?</p>
      <p className={styles.description}>{asset.What}</p>
      <p className={styles.what + " " + styles.why}>Why use {asset.name}?</p>
      <p className={styles.description}>{asset.Why}</p>
      <p className={styles.what + " " + styles.totalValueLocked}>
        Total Value Locked
      </p>
      <div className={styles.info}>
        <p className={styles.infoTextSmall}>-16.8%</p>
        <p className={styles.infoText}>$1.79B</p>
      </div>
      <p className={styles.what + " " + styles.tokenPrice}>Token Price</p>
      <div className={styles.info}>
        <p className={styles.infoText}>$103.62</p>
      </div>
      <p className={styles.what + " " + styles.followTwitterAccounts}>Follow</p>
      <div className={styles.twitterAccounts}>
        <div className={styles.twitterAccount}>@StaniKulechov</div>
        <div className={styles.twitterAccount}>@LemiScate</div>
      </div>
      <p className={styles.title}>Browse More</p>
    </div>
  );
};

export default individualAsset;

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://blooming-plateau-28061.herokuapp.com/assets"
  );
  const assets = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = assets.map((asset) => ({
    params: { name: asset.name },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This function gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://blooming-plateau-28061.herokuapp.com/assets?name=${params.name}`
  );
  const data = await res.json();
  // console.log(data);
  // console.log(data[0]);

  return {
    props: { asset: data[0] },
  };
}
