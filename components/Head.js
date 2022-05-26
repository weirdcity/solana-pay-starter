import React from "react";
import Head from "next/head";

export default function HeadComponent() {
  return (
    <Head>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />

      <title>Solana Pay Store</title>
      <meta name="title" content="🥁 Birdzhouse Drumkit Store 🥁" />
      <meta name="description" content="Powered by Solana Pay!" />

      {/* Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://buildspace.so/" />
      <meta property="og:title" content="🥁 Birdzhouse Drumkit Store 🥁" />
      <meta property="og:description" content="Powered by Solana Pay!" />
      <meta property="og:image" content="https://cdn.buildspace.so/courses/solana-pay/metadata.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://buildspace.so/" />
      <meta property="twitter:title" content="🥁 Birdzhouse Drumkit Store 🥁" />
      <meta property="twitter:description" content="Powered by Solana Pay!" />
      <meta property="twitter:image" content="https://cdn.buildspace.so/courses/solana-pay/metadata.png" />
    </Head>
  );
}
