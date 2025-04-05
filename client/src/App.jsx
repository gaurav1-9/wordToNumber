import React from 'react'
import Buttons from './components/Buttons'

const App = () => {
  function convertToNum(){
    console.log("button clicked")
  }

  return (
    <div className='w-full h-screen bg-green-50 flex justify-center'>

      <input
        type="text"
        placeholder="Enter number in words..."
        className="w-lg p-3 h-14 my-8 border-3 rounded-md border-black text-black font-bold outline-none focus:outline-none hover:scale-[1.01] focus:scale-[1.01]"
      />
      <Buttons bgColor='bg-green-500' btnText='convert number' buttonCallback={convertToNum} />

    </div>
  )
}

export default App