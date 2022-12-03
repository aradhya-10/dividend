import React from 'react'
const ethers = require("ethers");

const publicPool = () => {
  const ensNameResolver = (async (e) => {
    const ensName = e.target.value;
    if (ensName.substr(0, 2) != "0x") {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.QUICKNODE_ID
      );

      const address = await provider.resolveName(ensName);

      const balance = await provider.getBalance(ensName);

      console.log(
        `Balance of ${address} is:`,
        ethers.utils.formatEther(balance)
      );
    }
  })();
  return (
    <div className='flex bg-black'>
      
    </div>
  )
}

export default publicPool