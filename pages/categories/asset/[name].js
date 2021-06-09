const individualAsset = ({ asset }) => {
  return (
    <div style={{ padding: "9rem 5.5rem", color: "white" }}>
      <h1>Individual asset page</h1>
      <p>What: {asset.What}</p>
      <p style={{ margin: "1rem 0" }}>WHY: {asset.Why}</p>
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
