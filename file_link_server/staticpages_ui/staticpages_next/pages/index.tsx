import React from "react";
import Navbar from "./components/Navbar";
import Head from "next/head";

export default () => {
  return (
    <div>
      <Head>
        <link
          rel="icon"
          href="https://file-link.s3.us-east-2.amazonaws.com/logo.png"
        />
      </Head>
      <Navbar />
    </div>
  );
};
