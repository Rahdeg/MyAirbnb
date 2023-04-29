'use client'
import React, { FC } from 'react'
import { cn } from '../lib/utils'

interface HeadingProps {
  title: string
  subtitle?: string
  center?: boolean
}

const Heading: FC<HeadingProps> = ({ title,subtitle,center }) => {
  return (
    <div className={cn({'text-center' : center,' text-start' : !center})}>
        <div className=' text-2xl font-bold'>
            {title}
        </div>
        <div className=' font-light text-neutral-500 mt-2 '>
            {subtitle}
        </div>
    </div>
  )
}

export default Heading;