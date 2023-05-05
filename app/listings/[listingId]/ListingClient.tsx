import Container from '@/app/components/Container';
import { categories } from '@/app/components/navbar/Categories';
import { Listing, Reservation, User } from '@prisma/client';
import React, { FC, useMemo } from 'react'

interface ListingClientProps {
  reservations?: Reservation[]
  listing: Listing & { user: User}
  currentUser?: User | null 
}

const ListingClient: FC<ListingClientProps> = ({ listing,currentUser }) => {
    const category = useMemo(()=>{
        return categories.find((item)=> item.label === listing.category)
    },[listing.category])

  return (
   <Container>
    <div className=' max-w-screen-lg mx-auto'>
        <div className=' flex flex-col gap-6'>
            <ListingHead title= {listing.title} imageSrc={listing.imageSrc} locationValue={listing.locationValue} id={listing.id} currentUser={currentUser}/>
        </div>
    </div>
   </Container>
  )
}

export default ListingClient;