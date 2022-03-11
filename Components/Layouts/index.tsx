import { FC } from "react";
import Head from "next/head";

const Layout: FC = ({ children }) => {
  return (
    <div className="w-full bg-bg min-h-screen">
      <Head>
        <title>The Witch Trials</title>
        <meta name="description" content="Decentralized Auction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
