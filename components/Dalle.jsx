import React, { useEffect, useState } from 'react'
import { AiOutlineCheck } from "react-icons/ai";


const { Configuration, OpenAIApi } = require("openai");

const key = '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';

const Dalle = () => {
  const [showImage, setShowImage] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const [prompt, setPrompt] = useState('Hello World')

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const configuration = new Configuration({
    apiKey: key,
  });
  const openai = new OpenAIApi(configuration);
  const handleClick = async () => {
    console.log("")
    const response = await openai.createImage({
      prompt: `${prompt}`,
      n: 1,
      size: "512x512",
      // response_format: "b64_json"
    })
    setTimeout(() => {
      console.log("uhhuhuh")
      setShowImage(true);
      const heya = response.data;
      console.log(heya.data[0].url);
      setImageUrl(heya.data[0].url);


    }, 20000)





    // return response.data;
    // imageUrl = response.data[0]["url"];
  }

  // imageUrl = run();




  // useEffect(() => {
  // }, [imageUrl])
  const [selectedFile, setSelectedFile] = useState(null);
  return (
    <div className='flex justify-evenly gap-4'>
      {/* <form> */}
      <div className='relative flex flex-col justify-start gap-5'>
        <input id='input0' className='border-[1.5px] border-[#9e9e9e] bg-transparent rounded-[1rem] transition-[border] duration-[150ms] p-4 text-[1rem] ease-[cubic-bezier(0.4,0,0.2,1)] focus:outline-none focus:border-gray-400 peer text-purple-700' />
        <label htmlFor='input0' className='absolute left-6 pointer-events-none transition-all duration-[150ms] ease-[cubic-bezier(0.4,0,0.2,1)] peer-focus:scale-[0.8] peer-focus:-translate-y-2/4 peer-focus:px-[0.2rem] z-10 peer-focus:bg-black top-4 peer-focus:top-0 text-purple-700'>
          Enter keywords
        </label>

        <button onClick={handleClick} className="text-black p-4 rounded-lg bg-blue-400 hover:text-purple-700 hover:border-gray-300 border
        ">

          Generate
        </button>
        {/* <form action="/action_page.php"> */}
        <label for="img" className='text-purple-700'>Select image:</label>
        <input
          onChange={(e) => setSelectedFile(e.target.files[0])} type="file" id="img" name="img" accept="image/*" className='rounded-md' />
        <input type="submit" className='p-4' />
        {/* </form> */}
      </div>
      <div className='rounded-lg shadow-md shadow-grey-300'>
        {showImage && <img className='rounded-lg' src={imageUrl}></img>}
      </div>
    </div >
  )
}

export default Dalle