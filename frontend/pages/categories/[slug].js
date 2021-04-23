import React from 'react'
import styles from "../../styles/assets.module.css";

export default function Asset({ category }) {
  // console.log(categoryAssets)
  let assets = category;
  console.log(assets)
  console.log(assets.assets[0].logo)

  return (
  
      <div className={styles.assetConatiner}>
        
        
      {assets.map((asset) => {
        return (
          <div key={asset.name} className={styles.assetCardContainer}>
          <div className={styles.assetCardHeadingContainer}>
            <h1>{asset.name}</h1>
            {/* <img src={asset} alt="img"/> */}
          </div>
          
          <div id={styles.test}>
          <p>{asset.description}</p>
          </div>
          </div>
        )
      })}
      </div>
   
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch('http://localhost:1337/categories')
  const categories = await res.json()

  // Get the paths we want to pre-render based on categories
  // const paths = categories.map((category) => ({
  //   params: { id: category.id},

  // }))

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { 
    paths: categories.map((category) => ({
      params: { slug: category.slug},
    })),
    fallback: false 
  }
}


// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`http://localhost:1337/categories?slug=${params.slug}`)
  const data = await res.json()
  
  // Pass post data to the page via props
  return { props: { category: data } }
}



// export async function getStaticProps() {
//   const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
//   const client = new ApolloClient({
//     uri: `${API_URL}/graphql`,
//     cache: new InMemoryCache()
//   });

//   const { data } = await client.query({
//     query: gql`
//       query GetCategories {
//         categories {
//           id
//           name
//           description
//           assets {
//             id
//             name
//             description
//           }
//         }
//     }
//     `
//   });

//   return {
//     props: {
//       categories: data.categories
//     }
//   }
// }
