import React, { Dispatch, SetStateAction } from 'react'
import { usePageContext } from '../context/PageContext'


const FirstElement = () => {
    const pageContext = usePageContext()
    const {currentPage, hasMore, isVisible, isVisibleInitial } = pageContext

  return (
    <div className="" >
      <p className={` mb-2 py-3 ${currentPage ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-green-500"} font-bold text-lg sm:text-xl `}>{`currentPage: ${JSON.stringify(currentPage - 1)}`}</p>
      <p className={` py-3 ${isVisible ? "text-white bg-pink-500 rounded w-72 mx-auto" :"text-purple-500"} font-bold text-lg sm:text-xl `}>{`isVisible: ${JSON.stringify(isVisible)}`}</p>
      <p className={` py-3 ${isVisibleInitial ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-blue-500"} font-bold text-lg sm:text-xl `}>{`isVisibleInitial: ${JSON.stringify(isVisibleInitial)}`}</p>
    </div>   
  )
}

export default FirstElement