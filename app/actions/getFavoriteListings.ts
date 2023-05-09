import prisma from '@/app/lib/prismadb'
import getCurrentUser from './getCurrentUser'

export default async function getFavoriteListings(){
    try {
        const currentUser = await getCurrentUser();
        if (!currentUser) {
            return [];
        }
     const favorite = await prisma.listing.findMany({
        where:{
            id:{
                in: [...(currentUser.favoriteIds || [])]
            }
        }
     })
     return favorite
    } catch (error:any) {
        throw new Error(error)
    }
}