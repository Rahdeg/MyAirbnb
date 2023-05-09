import getCurrentUser from '../actions/getCurrentUser';
import getFavoriteListings from '../actions/getFavoriteListings';
import ClientOnly from '../components/ClientOnly';
import EmptyState from '../components/EmptyState';
import FavoriteClient from './FavoriteClient';

interface FavouritesPageProps {
  
}

const FavouritesPage = async ({  }) => {
    const currentUser = await  getCurrentUser();
    const favorites = await getFavoriteListings();

    if (!currentUser) {
        return (<ClientOnly>
            <EmptyState title='Unauthorized' subtitle='Please login'/>
        </ClientOnly>)
    }

    if (favorites.length === 0) {
   return (<ClientOnly>
            <EmptyState title='No favorite found' subtitle='Looks like you have no favorite listings.'/>
        </ClientOnly>)
    }

  return (
    <ClientOnly>
          <FavoriteClient currentUser={currentUser} favorites={favorites}/>
        </ClientOnly>
  )
}

export default FavouritesPage;