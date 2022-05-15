import Head from "next/head";

export default function Layout({ children }) {
  return (
    <div>
      <Head>
      <link href="https://fonts.googleapis.com/css2?family=Changa&display=swap" rel="stylesheet" />
      </Head>
      <div className="container">
        {children}
      </div>
    </div>
  );
}
