import React, { Dispatch, SetStateAction } from 'react'

interface CompoentProps{
    setElement: Dispatch<SetStateAction<any>>
}

const LastElement = ({setElement} : CompoentProps) => {
  return (
        <div className="" ref={setElement}>
            <p className="font-bold text-orange-500 text-lg sm:text-xl py-3">
                ＊ Yes, I am the last one ＊
            </p>
        </div>   
  )
}

export default LastElement