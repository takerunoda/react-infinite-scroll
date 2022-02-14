import React from 'react'
import CreatedFor from '../Components/CreatedFor'
import Item from '../Components/Item'
import LoaderSmall from '../Components/LoaderSmall'
import getItemsByPage from '../utils/getItemsByPage'
import { useHandleObserverInitial } from '../utils/useHandleObserverInitial'
import { useHandleObserver } from '../utils/useHandleObserver'
import { DataProps } from '../utils/interface'
import LastElement from '../Components/LastElement'
import Reload from '../Components/Reload'
import { usePageContext } from '../context/PageContext'


interface PageProps { 
  initialData: DataProps[]
  itemsLength: number
  totalPages: number
} 

const Index = ({initialData} : PageProps) => {

  const pageContext = usePageContext()
  const {loading, isVisible, isVisibleInitial, hasMore, items, element, setElement,        
        elementInitial, setElementInitial, currentPage} = pageContext
  useHandleObserver({ element})  
  useHandleObserverInitial({ elementInitial})  

  return (
    <>
    <div className="text-center">
    <div className="">
      <CreatedFor />                
    </div>
      <h1 className="text-3xl sm:text-4xl font-bold my-5 sm:my-8">Numbers 🎲</h1>
      <h2 className="text-xl sm:text-2xl font-bold my-5 sm:my-8">
        <p>スクロールすると</p>
        <p>次のアイテムを読み込みます ⬇️</p>
      </h2>
      <p className={` mb-3 py-3 ${currentPage ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-green-500"} font-bold text-lg sm:text-xl `}>{`currentPage: ${JSON.stringify(currentPage)}`}</p>
      <p className={` py-3 ${isVisible ? "text-white bg-pink-500 rounded w-72 mx-auto" :"text-purple-500"} font-bold text-lg sm:text-xl `}>{`isVisible: ${JSON.stringify(isVisible)}`}</p>
      <p className={` py-3 ${isVisibleInitial ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-blue-500"} font-bold text-lg sm:text-xl `}>{`isVisibleInitial: ${JSON.stringify(isVisibleInitial)}`}</p>
      <ul className="w-11/12 mx-auto mt-8 text-center">
            {initialData && 
            initialData.map((item, index) => <Item 
                        item={item} 
                        key={index} />)}
      <p className={` py-3 ${isVisibleInitial ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-blue-500"} font-bold text-lg sm:text-xl `}>{`isVisibleInitial: ${JSON.stringify(isVisibleInitial)}`}</p>
      <div className="text-lg sm:text-xl font-bold px-3 mt-3">
        <p>＊最後のアイテム(2)が隠れると、</p>
        <p>true/falseが切り替わります</p>
      </div>
      <LastElement setElement={setElementInitial} />
          {items &&  
            items.map((item, index) => <Item 
                        item={item} 
                        key={index} />)
                }
      <p className={` mb-3 py-3 ${currentPage ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-green-500"} font-bold text-lg sm:text-xl `}>{`currentPage: ${JSON.stringify(currentPage)}`}</p>
      <p className={` mb-3 py-3 ${hasMore ? "text-white bg-red-500 rounded w-72 mx-auto" :"text-yellow-500"} font-bold text-lg sm:text-xl `}>{`hasMore: ${JSON.stringify(hasMore)}`}</p>
      <p className={` mb-3 py-3 ${isVisible ? "text-white bg-pink-500 rounded w-72 mx-auto" :"text-purple-500"} font-bold text-lg sm:text-xl `}>{`isVisible: ${JSON.stringify(isVisible)}`}</p>
      <p className={` py-3 ${isVisibleInitial ? "text-white bg-blue-500 rounded w-72 mx-auto" :"text-blue-500"} font-bold text-lg sm:text-xl `}>{`isVisibleInitial: ${JSON.stringify(isVisibleInitial)}`}</p>
      <LastElement setElement={setElement} />
      </ul>
        {loading && 
            <div className="my-5">
                <LoaderSmall />
            </div>}
      <div className="py-3">
        <Reload />
      </div>
    </div>
    </>
  )
}

export default Index

export const getStaticProps =  () => {
  const pageOne = getItemsByPage({ currentPage: 1 })

  return  {
      props: { 
        initialData: pageOne.currentItems,
      }
  }
}