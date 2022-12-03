import Head from "next/head";
import Image from "next/image";
import { useContext, useState } from "react";
//Wagmi
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import dynamic from "next/dynamic";
import { Suspense } from "react";
//Internal Imports
import Dalle from "../components/Dalle";
import ViewNFT from "../components/ViewNFT";

// var Web3 = require("web3");

// var accounts = ethereum.enable();
// var web3 = new Web3(ethereum);
// var ens = web3.eth.ens;

export default function Home() {
  const Navbar = dynamic(
    () => import("../components/Navbar").then((res) => res),
    {
      ssr: false,
    }
  );
  // init wallet
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });
  const [imageUrl, setImageUrl] = useState('');

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Dividend</title>
        <meta name="Dividend" content="Fractionalize your NFT!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar />
        </Suspense>
        <section className="p-4 m-4 flex items-center justify-center">
          <Dalle imageUrl = {imageUrl} />
        </section>
      </main>
    </div>
  );
}
