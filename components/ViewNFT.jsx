import React, { useState } from 'react'

const ViewNFT = () => {
  const [showFraction, setShowFraction] = useState(false);
  return (
    <div className='flex flex-col items-center justify-center'>
      {showFraction && <div className={" absolute z-10 top-10 w-[1000px] h-[500px] bg-transparent overflow-hidden " + (showFraction ? "border border-white" : "")}>
        <img className="w-[1600px] h-[800px] z-10 object-none" src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg" />
      </div>}
      <img className={"w-[800px] h-[400px] " + (showFraction ? "opacity-70" : "")} src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg" />

      <button className='bg-blue-400 hover:bg-transparent hover:border-gray-300 hover:border p-3' onClick={() => setShowFraction(true)}>Show my Ownership</button>
    </div>
  )
}

export default ViewNFT