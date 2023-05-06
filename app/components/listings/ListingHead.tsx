"use client"
import Heading from '@/app/components/Heading'
import HeartButton from '@/app/components/HeartButton'
import useCountries from '@/app/hooks/useCountry'
import { User } from '@prisma/client'
import Image from 'next/image'
import React, { FC } from 'react'

interface ListingHeadProps {
  title: string
  locationValue: string
  imageSrc: string
  id: string
  currentUser?: User | null 
}

const ListingHead: FC<ListingHeadProps> = ({ title,locationValue,imageSrc,id,currentUser }) => {
    const {getByValue} = useCountries();
    const location = getByValue(locationValue);
  return (
    <>
    <Heading title={title} subtitle={`${location?.region}, ${location?.label}`}/>
    <div className=' w-full h-[60vh] overflow-hidden rounded-xl relative'>
    <Image fill alt='image'src={imageSrc} className=' object-cover w-full'/>
    <div className=' absolute top-5 right-5'>
    <HeartButton currentUser={currentUser} listingId={id}/>
    </div>
    </div>
   
    </>
   
   
  )
}

export default ListingHead;