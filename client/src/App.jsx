import React, { useRef } from 'react'
import Buttons from './components/Buttons'

const App = () => {
  const inpRef = useRef(null);
  
  function convertToNum() {
    const subInp = inpRef.current.value;
    if(subInp !== '') console.log(subInp)
    inpRef.current.value = ''
  }

  return (
    <div className='w-full h-screen bg-green-50 flex justify-center'>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Enter number in words..."
          className="w-lg p-3 h-14 my-8 border-3 rounded-md border-black text-black font-bold outline-none focus:outline-none hover:scale-[1.01] focus:scale-[1.01] cursor-pointer"
          ref = {inpRef}
        />
        <Buttons bgColor='bg-green-500' btnText='Actual NUmber' buttonCallback={convertToNum} />
      </form>
    </div>
  )
}

export default App