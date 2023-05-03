"use client"

import { cn } from '@/app/lib/utils'
import React, { FC } from 'react'
import { IconType } from 'react-icons'

interface CategoryInputProps {
  onClick:(value:string)=> void
  selected: boolean
  label: string
  icon: IconType
}

const CategoryInput: FC<CategoryInputProps> = ({ icon:Icon,selected,label,onClick }) => {
  return (
    <div
    onClick={()=>{onClick(label)}}
    className={cn(' rounded-xl border-2 p-4 flex flex-col gap-3 hover:border-black transition cursor-pointer',{'border-black': selected,' border-neutral-200': !selected})}>
        <Icon size={30}/>
        <div className=' font-semibold'>
            {label}
        </div>
    </div>
  )
}

export default CategoryInput;