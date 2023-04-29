"use client";
import Image from 'next/image';
import {useRouter} from 'next/navigation'
import React, { FC } from 'react'


interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({  }) => {
    const router = useRouter();

  return (
    <div className=''>
     <Image alt='logo' src='/images/Logo.png' className=' hidden sm:block cursor-pointer' height='100' width='100' priority/>
    </div>
  )
}

export default Logo;