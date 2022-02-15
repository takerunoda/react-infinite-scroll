import React, { Dispatch, SetStateAction } from 'react'
import { usePageContext } from '../context/PageContext'

interface CompoentProps{
    setElement: Dispatch<SetStateAction<any>>
}

const LastElement = ({setElement} : CompoentProps) => {
    const pageContext = usePageContext()
    const {currentPage, hasMore, isVisible, isVisibleInitial } = pageContext

  return (
    <div className="" >
        <p className={` mb-1 py-2 ${isVisible ? "text-white bg-pink-500 rounded w-72 mx-auto" :"text-purple-500"} font-bold text-lg sm:text-xl `}>{`isVisible: ${JSON.stringify(isVisible)}`}</p>
        <p className={` mb-1 py-2 ${isVisibleInitial ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-blue-500"} font-bold text-lg sm:text-xl `}>{`isVisibleInitial: ${JSON.stringify(isVisibleInitial)}`}</p>
        <p className={` mb-1 py-2 ${hasMore ? "text-white bg-red-500 rounded w-72 mx-auto" :"text-yellow-500"} font-bold text-lg sm:text-xl `}>{`hasMore: ${JSON.stringify(hasMore)}`}</p>
        <p className={` mb-1 py-2 ${currentPage ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-green-500"} font-bold text-lg sm:text-xl `}>{`currentPage: ${JSON.stringify(currentPage - 1)}`}</p>
        <p className="font-bold text-orange-500 text-lg sm:text-xl py-3" ref={setElement}>
            ＊ Yes, I am the last one ＊
        </p>
    </div>   
  )
}

export default LastElement