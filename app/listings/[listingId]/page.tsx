import getCurrentUser from '@/app/actions/getCurrentUser';
import getListingById from '@/app/actions/getListingById';
import ClientOnly from '@/app/components/ClientOnly';
import EmptyState from '@/app/components/EmptyState';
import React, { FC } from 'react'
import ListingClient from './ListingClient';
import getReservations from '@/app/actions/getRservation';


interface IParams{
  listingId?: string
}

const ListingPage = async ({ params }:{params: IParams}) => {
  const currentUser = await getCurrentUser();
  const listing = await getListingById(params)
  const reservation = await getReservations(params)
  if (!listing) {
    return(
      <ClientOnly>
        <EmptyState/>
      </ClientOnly>
    )
  }
  return (
    <ClientOnly>
        <ListingClient listing={listing} currentUser={currentUser} reservations={reservation}/>
      </ClientOnly>
  )
}

export default ListingPage;