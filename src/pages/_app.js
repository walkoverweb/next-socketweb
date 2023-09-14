import "@/scss/global.scss";
import "bootstrap/dist/css/bootstrap.css";
import Head from "@/components/head";
import Navbar from "@/components/navbar";
import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();
  var browserPath = router.asPath;

  var showNavbar = false;
  if (browserPath !== "/login" && browserPath !== "/signup") {
    showNavbar = true;
  }
  return (
    <>
      <Head />
      {showNavbar && <Navbar />}
      <Component {...pageProps} />
    </>
  );
}
