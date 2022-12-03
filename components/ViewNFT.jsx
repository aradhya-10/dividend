import React, { useState } from 'react';
import { motion } from "framer-motion";
const ViewNFT = () => {
  const [showFraction, setShowFraction] = useState(false);

  return (
    <div className='m-4 flex flex-col items-center justify-center'>

      {showFraction && <motion.div
        initial={{
          scale: 0,
          opacity: 0.8
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1
        }}

        className={"absolute z-10 top-10 w-[1000px] h-[500px] bg-transparent overflow-hidden"}>
        <div className='text-gray-300 text-96 z-[111] text-right hover:text-gray-600 cursor-pointer'
        onClick = {() => setShowFraction(false)}
        >X</div>
        <motion.img
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            duration: 1
          }}
          className="w-[1600px] h-[800px] z-10 object-none border border-white" src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg" />

      </motion.div>}
      <img

        className={"w-[800px] h-[400px] border border-gray-300 " + (showFraction ? "opacity-70" : "")} src="https://cdn.mos.cms.futurecdn.net/owm4oa3hXUG58mka7hPvfP.jpg" />

      <button className='m-4 rounded-lg hover:text-white bg-blue-400 hover:bg-transparent hover:border-gray-300 hover:border p-3' onClick={() => setShowFraction(true)}>Show my Ownership</button>
    </div>
  )
}

export default ViewNFT