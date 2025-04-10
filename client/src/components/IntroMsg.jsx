import React from 'react'

function IntroMsg() {
    return (
        <div className='text-zinc-600'>
            <p className="mb-2">👉 Type a number in words to see its numeric form!</p>
            <p className="italic">For example: <span className="text-orange-600 font-semibold">"nineteen"</span> ➡️ <span className="text-green-700 font-bold">19</span></p>
            <p className='text-sm mt-5'>Three digit numbers (i.e numbers starting from 0 to 999)</p>
        </div>
    )
}

export default IntroMsg