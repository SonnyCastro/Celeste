// /* /lib/apollo.js */

// import { HttpLink } from "apollo-link-http";
// import { withApollo } from "next-apollo";

// const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337"

// const config = {
//   link: new HttpLink({
//     uri: `${API_URL}/graphql`, // Server URL (must be absolute)
//   })
// };

// export default withApollo(config);

import { withApollo } from "next-apollo";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const API_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  "https://blooming-plateau-28061.herokuapp.com";

const apolloClient = new ApolloClient({
  uri: `${API_URL}/graphql`,
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);

// export function getStrapiURL(path = "") {
//   return `${
//     process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
//   }${path}`;
// }

// // Helper to make GET requests to Strapi
// export async function fetchAPI(path) {
//   const requestUrl = getStrapiURL(path);
//   const response = await fetch(requestUrl);
//   const data = await response.json();
//   return data;
// }
