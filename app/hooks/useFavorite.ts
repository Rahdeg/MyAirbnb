import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useMemo, useCallback } from "react";
import {  toast } from "react-hot-toast";
import useLoginModal from "./useLoginModal";
import { User } from "@prisma/client";

interface IUsefavorite {
    listingId: string
    currentUser: User | null | undefined
}

const Usefavorite =({listingId,currentUser }: IUsefavorite)=>{
const router = useRouter();
const loginModal = useLoginModal();

const hasFavorited = useMemo(()=>{
    const list = currentUser?.favoriteIds || [];
    return list.includes(listingId)
},[listingId,currentUser?.favoriteIds])

const toggleFavorite = useCallback( async (e: React.MouseEvent<HTMLDivElement>)=>{
    e.stopPropagation();
    if (!currentUser) {
        return loginModal.onOpen();
    }
    try {
        let request;
        if (hasFavorited) {
            request = () => axios.delete(`/api/favorites/${listingId}`)
        }else {
            request = () => axios.post(`/api/favorites/${listingId}`)
        }
        await request();
        router.refresh();
        toast.success('Success')
    } catch (error) {
        toast.error('Something went wrong.')
    }
},[currentUser,hasFavorited,listingId,loginModal,router]);
    return { hasFavorited ,toggleFavorite}
}

export default Usefavorite;