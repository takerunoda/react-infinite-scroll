import React, { Dispatch, SetStateAction } from 'react'
import { DataProps } from '../utils/interface'
import LastElement from './LastElement'

interface ComponentProps {
    item: DataProps
    last: boolean
    setElement: Dispatch<SetStateAction<any>>
}

const Item = ({item, last, setElement} : ComponentProps) => {
  return (
    <li className="my-24 sm:my-12">
      <div className="mx-auto text-center">
            <img src={item.picture} alt={item.title} className="w-48 sm:w-auto max-w-sm mx-auto"/>
      </div>
      {last && <LastElement setElement={setElement}/>}
    </li>
  )
}

export default Item