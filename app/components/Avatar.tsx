"use client"
import Image from 'next/image';
import React, { FC } from 'react'

interface AvatarProps {
  src: string | null |undefined
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
 <Image src={ src ||'/images/placeholder.jpg'} alt='avatar' width='30' height='30'
 className=' rounded-full'
 referrerPolicy='no-referrer'
 />
  )
}

export default Avatar;