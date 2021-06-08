import React, { useState } from "react";
import CategoryList from "../../components/CategoryList";
// import { useQuery } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import styles from "../../styles/Categories.module.css";
import gql from "graphql-tag";
import Link from "next/link";

export default function Categories({ categories }) {
  const [click, setClick] = useState(false);
  // const { loading, error, data } = useQuery(QUERY);

  console.log(categories);
  let categoryList = ["DeFi", "Art", "Trade", "Gaming"];

  return (
    <div className={styles.testing}>
      <div className={styles.nav}>
        <div className={styles.innernav}>
          {categoryList?.map((category) => {
            return (
              <button className={styles.navitem}>
                <p className={styles.navitemtext}>{category}</p>
              </button>
            );
          })}
        </div>
      </div>
      <div className={styles.container}>
        {categories?.map((category) => (
          <div className={styles.item} key={category.id}>
            <h3 className={styles.name}>{category.name}</h3>
            <div className={styles.description}>
              <h3>{category.description}</h3>
            </div>
            <Link href={`/categories/${category.slug}`}>
              <a>
                <button style={{ margin: "1rem" }}>
                  Go To Assets Page for this category
                </button>
              </a>
            </Link>
          </div>
        ))}
      </div>
      {/* <CategoryList title="Category Page hello this is a prop"/> */}
    </div>
  );
}

export async function getStaticProps() {
  const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    "https://blooming-plateau-28061.herokuapp.com";
  const client = new ApolloClient({
    uri: `${API_URL}/graphql`,
    cache: new InMemoryCache(),
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
    `,
  });

  return {
    props: {
      categories: data.categories,
      slug: data.categories.slug || null,
    },
  };
}
