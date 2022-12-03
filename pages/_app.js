import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import "@biconomy/web3-auth/dist/src/style.css";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
// import Navbar from "../components/Navbar";
// import dynamic from "next/dynamic";
// import { Suspense } from "react";

const { chains, provider } = configureChains(
  [chain.mainnet, chain.polygon, chain.polygonMumbai, chain.goerli],
  [alchemyProvider({ alchemyId: process.env.QUICKNODE_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "dividend",
  chains,
});
const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});
// ENS functionality is provided directly on the core provider object.
function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black min-h-screen">
      <WagmiConfig client={wagmiClient}>
        <RainbowKitProvider
          chains={chains}
          theme={darkTheme({ accentColor: "rgb(148,0,211)" })}
        >
          <Component {...pageProps} />
        </RainbowKitProvider>
      </WagmiConfig>
    </div>
  );
}

export default MyApp;
