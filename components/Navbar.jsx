import React from 'react'
import Link from "next/link"
// import { ConnectButton } from '@rainbow-me/rainbowkit'
import { ethers } from 'ethers'

import { ChainId } from "@biconomy/core-types";
import SocialLogin, { socialLoginSDK } from "@biconomy/web3-auth";
// import SmartAccount from "@biconomy/smart-account";

const Navbar = () => {
  async function socialLogin() {
    const socialLoginSDK = new SocialLogin();
    const signature = await socialLoginSDK.whitelistUrl(
      "https://yourdomain.com"
    );
    //     const { provider, address } = useWeb3AuthContext();
    // const walletProvider = new ethers.providers.Web3Provider(provider);
    // pass while initialization
    // using current active chain as Goerli (chainId 5)
    await socialLoginSDK.init(
      ethers.utils.hexValue(80001),
      {
        "http://localhost:3000": signature,
      }
    );
    socialLoginSDK.showConnectModal();

    // show connect modal
    socialLoginSDK.showWallet();
    // let smartAccount = new SmartAccount(walletProvider, options);
    // smartAccount = await smartAccount.init();
    // if (!socialLoginSDK?.web3auth?.provider) return;
    // const provider = new ethers.providers.Web3Provider(
    //   socialLoginSDK.web3auth.provider
    // );
    // const accounts = await provider.listAccounts();
    // console.log("EOA address", accounts);
    
  }  
 

  return (

    <nav className="px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <Link href={{ pathname: "/" }}>
          <span className="self-center text-xl font-semibold whitespace-nowrap text-blue-300 tracking-[10px]">DIVIDEND</span>
        </Link>x
        {/* <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false"> */}
        {/* <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button> */}
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

            <li className='flex items-center'>
              <Link href={{ pathname: "/" }}>
                <span className="text-white rounded bg-transparent md:text-purple-700 dark:text-white" aria-current="page">Home</span>
              </Link>
            </li>

            <li>
				<div className="bg-purple-500 px-4 py-2 rounded-full">
              <button onClick = {() => socialLogin()} >Connect </button>
			  </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar