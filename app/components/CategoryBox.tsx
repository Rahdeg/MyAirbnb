import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { cn } from '../lib/utils'

interface CategoryBoxProps {
  label: string
  description?: string
  selected?: boolean
  icon : IconType
}

const CategoryBox: FC<CategoryBoxProps> = ({ label,description,icon:Icon ,selected}) => {
  return (
    <div className={cn('flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 transition cursor-pointer',{'border-b-neutral-800 text-neutral-800': selected, 'border-transparent text-neutral-500': !selected})}>
        <Icon size={26}/>
        <div className=' font-medium text-sm'>
            {label}
        </div>
    </div>
  )
}

export default CategoryBox;