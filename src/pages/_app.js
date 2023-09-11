import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Head from "@/components/head";
import Navbar from "@/components/navbar";

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head />
      <Navbar/>
      <Component {...pageProps} />
    </>
  );
}
