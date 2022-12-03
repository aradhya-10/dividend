import React, { useEffect } from 'react'

const PrivatePool = ({ supply }) => {

  const ensNameResolver = (async (e) => {
    var ensName = e.target.value;
    if (ensName.substr(0, 2) != "0x" || ensName.length != 64) {
      const provider = new ethers.providers.JsonRpcProvider(
        process.env.QUICKNODE_ID
      );

      const address = await provider.resolveName(ensName);

      const balance = await provider.getBalance(ensName);

      console.log(
        `Balance of ${address} is:`,
        ethers.utils.formatEther(balance)
      );
      return address;
    }
    return ensName;
  })();

  const rows = [];

  const handleOnChange = (e, i) => {
    privateAddresses[i] = ensNameResolver(e.target.value);
  }

  for (let i = 0; i < supply; ++i) {
    rows.push(<li key={i}>
      <input
        type="text"
        name="floating_event_name"
        id="floating_event_name"
        className="block py-2.5 px-0 w-full text-sm text-purple-300 bg-transparent border-0 border-b-2 border-purple-300 appearance-none focus:outline-none focus:ring-0 focus:border-purple-400 peer"
        placeholder=" "
        required
        onChange={() => handleOnChange(e, i)}
      />
      <label
        htmlFor="floating_event_name"
        className="peer-focus:font-medium absolute text-sm text-purple-300 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-purple-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        Enter Contract Address or ENS Name
      </label>
    </li>)
  }
  const privateAddresses = [];
  useEffect(() => {
    privateAddresses.push('');
  }, [])

  return (
    <ul className=''>
      {rows}
    </ul>
  )
}

export default PrivatePool