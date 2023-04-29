"use client"
import React, { FC } from 'react'

interface MenuitemsProps {
  onClick :()=>void;
  label: string
}

const Menuitems: FC<MenuitemsProps> = ({ onClick,label }) => {
  return (
    <div className='px-4 py-3 hover:bg-neutral-100 transition font-semibold' onClick={onClick}>
     {label}
    </div>
  )
}

export default Menuitems;