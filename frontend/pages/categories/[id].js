import React from "react";
import styles from "../../styles/assets.module.css";

export default function Asset({ categoryAssets }) {
  // console.log(categoryAssets);
  let assets = categoryAssets.assets;
  console.log(assets);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.assetConatiner}>
        {assets.map((asset) => {
          return (
            <div key={asset.name} className={styles.assetCardContainer}>
              <div className={styles.assetCardHeadingContainer}>
                <h1>{asset.name}</h1>
                <img src={asset.logo.url} alt="img" />
              </div>

              <div id={styles.test}>
                <p>{asset.description}</p>
              </div>
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
  const res = await fetch("http://localhost:1337/categories");
  const categories = await res.json();

  // Get the paths we want to pre-render based on posts
  const paths = categories.map((category) => ({
    params: { id: category.id },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:1337/categories/${params.id}`);
  const categoryAssets = await res.json();

  // Pass post data to the page via props
  return { props: { categoryAssets } };
}
