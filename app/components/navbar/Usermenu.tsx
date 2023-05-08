"use client"
import React, { FC, useCallback, useState } from 'react'
import {signOut} from 'next-auth/react'
import {User} from '@prisma/client'
import {AiOutlineMenu} from 'react-icons/ai'
import Avatar from '../Avatar'
import Menuitems from './Menuitems'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import useLoginModal from '@/app/hooks/useLoginModal'
import { SafeUser } from '@/app/types'
import useRentModal from '@/app/hooks/useRentModal'
import { useRouter } from 'next/navigation'

interface UsermenuProps {
  currentUser?: User | null | undefined
}

const Usermenu: FC<UsermenuProps> = ({ currentUser }) => {
    const [isOpen, setIsOpen] = useState(false);
    const registerModel= useRegisterModal();
    const loginModal = useLoginModal();
    const rentModal = useRentModal();

    const router = useRouter();

    const toggleOpen = useCallback(()=>{
        setIsOpen((val)=>!val);
    },[])

    const onRent = useCallback(()=>{
        if (!currentUser) {
          return  loginModal.onOpen()
        }
        //open rent modal
        rentModal.onOpen()
    },[currentUser,loginModal,rentModal])

  return (
    <div className='relative'>
        <div className='flex flex-row items-center gap-3'>
        <div onClick={onRent} 
        className='hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer'>
            Airbnb your home
        </div>
        <div onClick={toggleOpen}
        className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
            <AiOutlineMenu/>
            <div className='hidden md:block'>
            <Avatar src={currentUser?.image}/>
            </div>
        </div>
        </div>
        {
            isOpen && (
                <div className=' absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm'>
                    <div className=' flex flex-col cursor-pointer'>
                        {
                            currentUser ? ( <>
                            <Menuitems onClick={()=>router.push('/trips')} label='My trips'/>
                           <Menuitems onClick={()=>{}} label='My favourites'/> 
                           <Menuitems onClick={()=>{}} label='My reservations'/>
                           <Menuitems onClick={()=>{}} label='My properties'/>
                           <Menuitems onClick={rentModal.onOpen} label='Airbnb my home'/>
                           <Menuitems onClick={()=>signOut()} label='Logout'/>
                            </>):(<><Menuitems onClick={loginModal.onOpen} label='Login'/>
                           <Menuitems onClick={registerModel.onOpen} label='Sign up'/> </>)
                        }
                       
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default Usermenu;