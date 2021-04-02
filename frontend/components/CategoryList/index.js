import React from 'react'
// import styles from "./Index.module.css"
import Link from 'next/link'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';

const QUERY = gql`
  {
    categories {
      id
      name
      description
    }
  }
`;

function CategoryList(props) {

  const { loading, error, data } = useQuery(QUERY);
  console.log(data)
  console.log(data.categories[0].name)
  let categories = data.categories;
  return (
    <div>
      <Link href="/assets"><h1>CategoryList Page!</h1></Link>
      <h1>CategoryList Page!</h1>
      {/* {{categories.map((cat) => {
        return (
          <div>
          <h1>{cat.name}</h1>
          <p>{cat.description}</p>
          </div>
        )
      })}} */}
      <h1>{props.title}</h1>
      <h1></h1>
      <h1>CategoryList Page!</h1>
    </div>
  )
  // if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  
  // if (loading) return <h1>Fetching</h1>;
  // if (data.assets && data.assets.length) {
  //   searchQuery
  //   console.log(data.assets[0].logo)
  //   const searchQuery = data.assets.filter((query) =>
  //     query.name.toLowerCase().includes(props.search)
  //   );
  //   if (searchQuery.length != 0) {
      // return (
        // <div>
        //   {searchQuery.map((res) => (
        //     <div style={{border:"2px solid green", padding:"10%"}}>
        //      <h1>{res.id}</h1>
        //      <h1>{res.name}</h1>
        //      <h1>{res.description}</h1>
        //      <img src={res.logo.url} alt="logo" />
        //      </div>
        //      </div>
        // <div className={styles.pageConatiner}>
        // <div className={styles.assetConatiner}>
        // {searchQuery.map((res) => {
          
          // const imageUrl = getStrapiMedia(`${res.assets}`);
}
export default CategoryList;

