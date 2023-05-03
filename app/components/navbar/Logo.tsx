"use client";
import Image from 'next/image';
import {useRouter} from 'next/navigation'
import React, { FC } from 'react'


interface LogoProps {
  
}

const Logo: FC<LogoProps> = ({  }) => {
    const router = useRouter();

  return (
    
     <Image
     onClick={()=>router.push('/')}
     alt='logo' src='/images/Logo.png' className=' hidden sm:block cursor-pointer' height='100' width='100' priority/>
  
  )
}

export default Logo;