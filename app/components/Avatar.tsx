"use client"
import Image from 'next/image';
import React, { FC } from 'react'

interface AvatarProps {
  
}

const Avatar: FC<AvatarProps> = ({  }) => {
  return (
 <Image src='/images/placeholder.jpg' alt='avatar' width='30' height='30'
 className=' rounded-full'
 referrerPolicy='no-referrer'
 />
  )
}

export default Avatar;