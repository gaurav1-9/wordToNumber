import React from 'react'

const NumOutput = ({input, output}) => {
    return (
        <div className='mb-4 pr-6'>
            <p className='flex'>
                <span className='w-2xl'>{input}</span>
                <span className=''>{output}</span>
            </p>
            <div className='w-2xl overflow-clip bg-zinc-500/30 h-0.5'></div>
        </div>
    )
}

export default NumOutput