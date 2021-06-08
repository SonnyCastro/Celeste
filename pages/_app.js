// /* _app.js */

// import App from "next/app";
// import withApollo from "../lib/apollo";
import Navbar from "../components/Navbar";
import "../styles/globals.css";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>
  );
};

export default MyApp;
// withApollo({ ssr: true })
