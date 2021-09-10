import React, { useContext } from 'react'
import { FavoriteHerosContext } from '../contextProviders/FavoriteHerosProvider'

interface Props {

}

const myfavhero = (props: Props) => {
    const favHerosContextValue = useContext(FavoriteHerosContext)
    console.log('favHerosContextValue',favHerosContextValue);
    
    return (
        <>
        </>
    )
}

export default myfavhero
