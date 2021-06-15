import React, { useState } from "react";
import CategoryList from "../../components/CategoryList";
// import { useQuery } from "@apollo/react-hooks";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import styles from "../../styles/Categories.module.css";
import gql from "graphql-tag";
import Link from "next/link";
import Image from "next/image";
export default function Categories({ categories }) {
  const [click, setClick] = useState(false);
  // const { loading, error, data } = useQuery(QUERY);

  // console.log(categories);
  let categoryList = ["DeFi", "Art", "Trade", "Gaming"];

  return (
    <div className={styles.testing}>
      <div className={styles.nav}>
        <div className={styles.innernav}>
          {categoryList?.map((category) => {
            return (
              <>
                <button key={category.id} className={styles.navitem}>
                  <p className={styles.navitemtext}>{category}</p>
                </button>
              </>
            );
          })}
        </div>
      </div>
      <div className={styles.header}>
        <h2
          className={styles.headerTitle}
          style={{ margin: "0%", padding: "0%", textAlign: "left" }}
        >
          Explore the Metaverse ☽
        </h2>
        <Image alt="breakline" src="/line.svg" width={880} height={50} />
        <p className={styles.headerText}>
          Celeste is your portal to the crypto metaverse. As the metaverse
          expands, it becomes harder to find apps you can benefit from. We
          research, test and evaluate blockchain applications in order to curate
          a list of high quality products that we believe you can gain from.
          Join our community.
        </p>
      </div>
      <div className={styles.container}>
        {categories?.map((category) => (
          <div className={styles.item} key={category.id}>
            <h3 className={styles.name}>{category.name}</h3>
            <div className={styles.description}>
              <p>{category.description}</p>
            </div>
            <div className={styles.viewAppContainer}>
              <Link href={`/categories/${category.slug}`}>
                <a className={styles.viewApps}>View Apps</a>
              </Link>
            </div>
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
