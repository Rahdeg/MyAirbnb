"use client"
import { User } from '@prisma/client'
import React, { FC } from 'react'
import {AiOutlineHeart,AiFillHeart} from 'react-icons/ai'
import { cn } from '../lib/utils'
import Usefavorite from '../hooks/useFavorite'

interface HeartButtonProps {
  listingId: string
  currentUser: User | null | undefined
}

const HeartButton: FC<HeartButtonProps> = ({listingId,currentUser  }) => {
    const {hasFavorited, toggleFavorite} =  Usefavorite({listingId,currentUser});
    
  return (
    <div
    onClick={toggleFavorite}
    className='relative hover:opacity-80 transition cursor-pointer'
    >
    <AiOutlineHeart size={28} className=' fill-white absolute -top-[2px] -right-[2px]'/>
    <AiFillHeart size={24} className={cn('',{'fill-rose-500':hasFavorited,'fill-neutral-500/70':!hasFavorited})}/>
    </div>
  )
}

export default HeartButton;