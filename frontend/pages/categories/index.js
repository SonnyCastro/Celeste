import React from 'react'
import CategoryList from "../../components/CategoryList";
import { useQuery } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import styles from "../../styles/Categories.module.css"
import gql from 'graphql-tag';
import Link from "next/link";

// import Navbar from "../../components/Navbar";
export default function Categories({ categories }) {
  // const { loading, error, data } = useQuery(QUERY);

  // console.log(categories)
  // console.log(data.categories[0].name)
  // let categories = data.categories;
  console.log(categories)

  // console.log(data)
  return (
    <div className={styles.testing} >
      
      <div className={styles.nav}>
        <div className={styles.innernav}>

         
          <input type="checkbox" id={styles.btnControl}/>
          <label className={styles.btnControl + " " + styles.navitem1} for={styles.btnControl}>
            <div className={styles.navitem + " " + styles.navitem1}>
              <p className={styles.navitemtext}>DeFi</p>
            </div>
          </label>
          <input type="checkbox" id={styles.btnControl}/>

        
        
          <button className={styles.navitem}>
            <p className={styles.navitemtext}>Art</p>
          </button>

          <button className={styles.navitem}>
            <p className={styles.navitemtext}>Art</p>
          </button>

          <button className={styles.navitem}>
            <p className={styles.navitemtext}>Art</p>
          </button>

        </div>
      </div>
      <div className={styles.container}>
      {categories.map(category => (
        <div className={styles.item} key={category.id}>
          <h3 className={styles.name}>{category.name}</h3>
          <h3 className={styles.id}>Cat ID {category.id}</h3>
          <div className={styles.description}><h3>{category.description}</h3></div>
          <Link href={'/categories/[id]'} as={`/categories/${category.id}`} ><a><button>Go To Assets Page for this category</button></a></Link>
        </div>
        
        
      ))}
      </div>
      {/* <CategoryList title="Category Page hello this is a prop"/> */}
    </div>
  )
};

// export default Categories;

export async function getStaticProps() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
      query GetCategories {
        categories {
          id
          name
          slug
          description
          assets {
            id
            name
            description
          }
        }
    }
    `
  });

  return {
    props: {
      categories: data.categories
    }
  }
}