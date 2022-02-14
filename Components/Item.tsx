import Image from 'next/image'
import React, { Dispatch, SetStateAction } from 'react'
import { DataProps } from '../utils/interface'

interface ComponentProps {
    item: DataProps
}

const Item = ({item} : ComponentProps) => {
  return (
    <li className="my-24 sm:my-12">
      <div 
      className="w-36 sm:w-48 mx-auto h-36 sm:h-48 relative">
            <Image src={item.picture} alt={item.title} 
              layout="fill"
            />
      </div>
    </li>
  )
}

export default Item