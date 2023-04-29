"use client"
import React, { FC } from 'react'
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import Usermenu from './Usermenu';

interface NavbarProps {
  
}

const Navbar: FC<NavbarProps> = ({  }) => {
  return (
    <div className='fixed w-full z-10 bg-white shadow-sm'>
     <div className=' py-4 border-b-[1px]'>
      <Container>
        <div className='flex flex-row gap-3 md:gap-0 items-center justify-between'>
        <Logo/>
        <Search/>
        <Usermenu/>
        </div>
      </Container>
     </div>
    </div>
  )
}

export default Navbar;