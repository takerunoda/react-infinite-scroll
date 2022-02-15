import React from 'react'
import CreatedFor from '../Components/CreatedFor'
import Item from '../Components/Item'
import LoaderSmall from '../Components/LoaderSmall'
import getItemsByPage from '../utils/getItemsByPage'
import { useHandleObserverInitial } from '../utils/useHandleObserverInitial'
import { useHandleObserver } from '../utils/useHandleObserver'
import { DataProps } from '../utils/interface'
import Reload from '../Components/Reload'
import { usePageContext } from '../context/PageContext'
import FirstElement from '../Components/FirstElement'


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
      <FirstElement />
      <ul className="w-11/12 mx-auto mt-8 text-center">
            {initialData && 
            initialData.map((item, index) => {
                    if(index + 1 === initialData.length){
                        return <Item 
                        item={item} 
                        setElement={setElementInitial} 
                        key={index}
                        last={true} />
                    } else {
                        return <Item 
                        item={item} 
                        setElement={setElementInitial} 
                        key={index}
                        last={false} />
                    }
                })}
      <div className="text-lg sm:text-xl font-bold px-3 mt-3">
        <p>＊最後のアイテム(2)が隠れると、</p>
        <p>true/falseが切り替わります</p>
      </div>
          {items && 
            items.map((item, index) => {
                    if(index + 1 === items.length){
                        return <Item 
                        item={item} 
                        setElement={setElement} 
                        key={index}
                        last={true} />
                    } else {
                        return <Item 
                        item={item} 
                        setElement={setElement} 
                        key={index}
                        last={false} />
                    }
                })}
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