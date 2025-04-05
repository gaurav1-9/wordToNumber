import React from 'react'

const Buttons = ({ bgColor, btnText, buttonCallback }) => {
    function buttonClick(){
        buttonCallback();
    }

    return (
        <button
            className={`p-3 h-14 mx-3 my-8 border-3 rounded-md ${bgColor} border-black text-black font-bold outline-none focus:outline-none hover:scale-[1.01]`}
            onClick={buttonClick}
        >
            {btnText.toUpperCase()}
        </button>
    )
}

export default Buttons