import Head from "next/head";
import Image from "next/image";
import Dalle from "../components/Dalle";
import Navbar from "../components/Navbar";
import ViewNFT from "../components/ViewNFT";
// import SocialLogin from "@biconomy/web3-auth";

// var Web3 = require("web3");

// var accounts = ethereum.enable();
// var web3 = new Web3(ethereum);
// var ens = web3.eth.ens;

export default function Home() {
  // init wallet
  // const socialLoginSDK = new SocialLogin();
  // async function socialLogin() {
  //   await socialLoginSDK.init("0x13881");
  //   // const signature = await socialLoginSDK.whitelistUrl(
  //   //   "https://yourdomain.com"
  //   // );

  //   // pass while initialization
  //   // using current active chain as Goerli (chainId 5)
  //   const socialLoginSDK = await socialLoginSDK.init(ethers.utils.hexValue(5), {
  //     "http://localhost:3001": signature,
  //   });
  // }
  // socialLogin();
  // socialLoginSDK.showConnectModal();

  // show connect modal
  // socialLoginSDK.showWallet();

  return (
    <div className="bg-black min-h-screen">
      <Head>
        <title>Dividend</title>
        <meta name="Dividend" content="Fractionalize your NFT!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
      <section className="relative flex justify-center items-center">
        <ViewNFT />
      </section>

        {/* <section className="flex p-5 items-center justify-center">
          <Dalle />
        </section> */}
      </main>
    </div>
  );
}
