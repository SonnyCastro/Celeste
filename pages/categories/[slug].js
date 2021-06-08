import React from "react";
import styles from "../../styles/assets.module.css";
// import { getServerSideProps } from "./Asset/[name]";
import Link from "next/link";

export default function Assets({ categoryAssets }) {
  console.log(categoryAssets.assets);
  let assets = categoryAssets.assets;
  console.log(assets);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.assetConatiner}>
        {assets?.map((asset) => {
          return (
            <div
              key={asset.name}
              id={asset.name}
              className={styles.assetCardContainer}
            >
              <div className={styles.assetCardHeadingContainer}>
                <h1>{asset.name}</h1>
                <img src={asset.logo.url} alt="img" />
              </div>

              <div id={styles.test}>
                <p>{asset.description}</p>
              </div>

              {/* <Link href={`.../asset/${asset.name}`}>
                <a style={{ marginBlock: "1rem", color: "blue" }}>
                  Go to Asset
                </a>
              </Link> */}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch(
    "https://blooming-plateau-28061.herokuapp.com/categories"
  );
  const categories = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { slug: category.slug },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  const res = await fetch(
    `https://blooming-plateau-28061.herokuapp.com/categories?slug=${params.slug}`
  );
  const data = await res.json();

  return {
    props: { categoryAssets: data[0] },
  };
}
