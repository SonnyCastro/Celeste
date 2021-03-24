// /* _app.js */

// import App from "next/app";
import withApollo from "../lib/apollo";
import React, { Component } from 'react'


const MyApp = ({Component, pageProps}) => {
  
  return (
    <div>
      <Component {...pageProps} />
    </div>
  )
}

export default withApollo({ ssr: true })(MyApp);




