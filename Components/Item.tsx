import React, { Dispatch, MutableRefObject, SetStateAction } from 'react'
import LastElement from './LastElement'
import { DataProps } from '../utils/interface'

interface ComponentProps {
    item: DataProps
    last: boolean
    setElement: Dispatch<SetStateAction<any>>
    elementRef: MutableRefObject<any>
}

const Item = ({item, last, setElement, elementRef} : ComponentProps) => {
// const Item = ({item, last, setElement} : ComponentProps) => {
  return (
    <li className="my-6 sm:my-12">
      <div className="mx-auto text-center">
            <img src={item.picture} alt={item.title} className="w-40 sm:w-auto max-w-sm mx-auto"/>
      </div>
      {last && <LastElement elementRef={elementRef}/>}
      {/* {last && <LastElement setElement={setElement}/>} */}
    </li>
  )
}

export default Item