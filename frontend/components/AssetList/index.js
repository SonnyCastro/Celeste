import React from 'react'
import { useQuery } from "@apollo/react-hooks";
import gql from 'graphql-tag';
import styles from "./Index.module.css"
// import { getStrapiMedia } from "../../lib/media";
import Image from 'next/image'

const QUERY = gql`
  {
    assets {
      id
      name
      description
      logo {
        url
      }
    }
  }
`;

function AssetList(props) {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return "Error loading restaurants";
  //if restaurants are returned from the GraphQL query, run the filter query
  //and set equal to variable restaurantSearch
  
  if (loading) return <h1>Fetching</h1>;
  if (data.assets && data.assets.length) {
    //searchQuery
    console.log(data.assets[0].logo)
    const searchQuery = data.assets.filter((query) =>
      query.name.toLowerCase().includes(props.search)
    );
    if (searchQuery.length != 0) {
      return (
        // <div>
        //   {searchQuery.map((res) => (
        //     <div style={{border:"2px solid green", padding:"10%"}}>
        //      <h1>{res.id}</h1>
        //      <h1>{res.name}</h1>
        //      <h1>{res.description}</h1>
        //      <img src={res.logo.url} alt="logo" />
        //      </div>
        //      </div>
        <div className={styles.pageConatiner}>
        <div className={styles.assetConatiner}>
        {searchQuery.map((res) => {
          
          // const imageUrl = getStrapiMedia(`${res.assets}`);
          return (
            <div className={styles.assetCardContainer}>
            <div className={styles.assetCardHeadingContainer}>
              <h1>{res.name}</h1>
              <img src={res.logo.url} style={{width:"70px", height:"70px"}}alt="img"/>
              {/* <Image src={res.logo.url} alt="img" width={100} height={100}/> */}
            </div>
            <div id={styles.test}>
            <p>{res.description}</p>
            </div>
            </div>
          )}
          )
        }
        </div>
      </div>
      );
    } else {
      return <h1>No Assets Found</h1>;
    }
  }
  return <h5>Add Assets</h5>;
}
export default AssetList;
// const index = () => {
//   return (
//     <div>
      
//     </div>
//   )
// }

// export default index
