import React, { useRef, useState } from 'react'
import axios from 'axios';
import Buttons from './components/Buttons'

const App = () => {
  const inpRef = useRef(null);
  const [numList, setNumList] = useState([])

  async function getNum(url) {
    try {
      const data = await axios.get(url);
      return data.data.output
    } catch (error) {
      console.log("Server not running")
    }
  }

  async function convertToNum() {
    const subInp = inpRef.current.value;
    const getNumURL = `http://localhost:3000/wordToNum?inp=${subInp.replaceAll(' ', '%20')}`;

    if (subInp !== '') {
      const output = await getNum(getNumURL);
      const inp = { input: subInp, output: output };

      setNumList((prevList) => ([...prevList, inp]));
    }

    inpRef.current.value = '';
  }

  return (
    <div className='h-screen bg-green-50 flex items-center flex-col'>
      <div className='w-full flex justify-center'>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter number in words..."
            className="w-lg p-3 h-14 my-8 border-3 rounded-md border-black text-black font-bold outline-none focus:outline-none hover:scale-[1.01] focus:scale-[1.01] cursor-pointer"
            ref={inpRef}
          />
          <Buttons bgColor='bg-green-500' btnText='Actual NUmber' buttonCallback={convertToNum} />
        </form>
      </div>
      <div className="w-2xl text-xl font-medium h-100 overflow-y-scroll overflow-x-hidden mt-3">
        {numList.map((item, index) => (
          <div className='mb-4 pr-2'>
            <p key={index} className='flex'>
              <span className='w-2xl'>{item.input}</span>
              <span className=''>{item.output}</span>
            </p>
            <div className='w-2xl overflow-clip bg-zinc-500/30 h-0.5'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App