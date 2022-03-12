import { FC } from "react";
import Head from "next/head";
import Navbar from "../Navbar";

interface Props {
  title: string;
}

const Layout: FC<Props> = ({ title, children }) => {
  return (
    <div className="w-full min-h-screen mb-10">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Decentralized Auction" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
