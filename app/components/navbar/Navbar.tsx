"use client"
import React, { FC } from 'react'
import {User} from '@prisma/client'
import Container from '../Container';
import Logo from './Logo';
import Search from './Search';
import Usermenu from './Usermenu';
import { SafeUser } from '@/app/types';
import Categories from './Categories';

interface NavbarProps {
  currentUser?: User | null
}

const Navbar: FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className='fixed w-full z-10 bg-white shadow-sm'>
     <div className=' py-4 border-b-[1px]'>
      <Container>
        <div className='flex flex-row gap-3 md:gap-0 items-center justify-between'>
        <Logo/>
        <Search/>
        <Usermenu currentUser={currentUser}/>
        </div>
      </Container>
     </div>
     <Categories/>
    </div>
  )
}

export default Navbar;