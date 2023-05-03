'use client'
import React, { FC, useCallback } from 'react'

interface CounterProps {
  title: string
  subtitle: string
  value: number
  onChange: (value: number) => void
}

const Counter: FC<CounterProps> = ({ title,subtitle,value,onChange}) => {

  const onAdd = useCallback(()=>{
    onChange(value + 1)
  },[onChange,value])

  const onReduce = useCallback(()=>{
    if( value === 1) return;
    onChange(value - 1)
  },[onChange,value])

  return (
    <div className='flex flex-row items-center justify-between '>
    <div className='flex flex-col'>
    <div className=' font-medium'>{title}</div>
    <div className=' font-light text-gray-600'>{subtitle}</div>
    </div>
    <div className=' flex flex-row items-center gap-4'>
      <div className='w-10 h-10 rounded-full border-[1px] border-neutral-400 items-center justify-center text-neutral-600 cursor-pointer hover:opacity-70 transition' onClick={onReduce}></div>
    </div>
    </div>
  )
}

export default Counter;