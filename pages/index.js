import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
//Wagmi
import { useAccount, useConnect } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";

import dynamic from "next/dynamic";
import { Suspense } from "react";
//Internal Imports
import Dalle from "../components/Dalle";
import Navbar from "../components/Navbar";
import ViewNFT from "../components/ViewNFT";

// var Web3 = require("web3");

// var accounts = ethereum.enable();
// var web3 = new Web3(ethereum);
// var ens = web3.eth.ens;

export default function Home() {
  const Navbar = dynamic(
    () => import("../components/Navbar").then((res) => res.default),
    {
      ssr: false,
    }
  );

  // init wallet
  const { address, isConnected } = useAccount();
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  });

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Dividend</title>
        <meta name="Dividend" content="Fractionalize your NFT!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <Navbar />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
