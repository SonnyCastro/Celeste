// /* _app.js */

import App from "next/app";
// import Head from "next/head";
// import Layout from "../components/Layout";
import withApollo from "../lib/apollo";
import React from 'react'

const MyApp = ({Component, pageProps}) => {
  // console.log(Component){ Component, pageProps}
  return (
    <div>
      {/* <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1> */}
      <Component {...pageProps} />
    </div>
  )
}

export default withApollo({ ssr: true })(MyApp);




