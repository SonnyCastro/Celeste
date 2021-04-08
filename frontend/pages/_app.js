// /* _app.js */

// import App from "next/app";
import withApollo from "../lib/apollo";
import React from 'react'
import Navbar from "../components/Navbar";
import "../styles/globals.css"

const MyApp = ({Component, pageProps}) => {
  
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  )
}

export default withApollo({ ssr: true })(MyApp);




