import "@/scss/global.scss";

import Head from "@/components/head";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var browserPath = router.asPath;

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
require("bootstrap/dist/css/bootstrap.min.css");
}, []);

  var showNavbar = false;
  if (browserPath !== "/login" && browserPath !== "/signup") {
    showNavbar = true;
  }
  return (
    <>
      <Head />
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
      {showNavbar && <Footer />}

    </>
  );
}
