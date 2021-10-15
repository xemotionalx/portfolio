import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css?family=Lato|Slabo+13px&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        <Header />
        <Navbar />
        <div className="main">{children}</div>
        <Footer />
      </div>
    </div>
  );
}
