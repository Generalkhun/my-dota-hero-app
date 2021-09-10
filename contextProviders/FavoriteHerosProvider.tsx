import { useState, useEffect, createContext } from "react";
import { getLocalStorage, setLocalStorage } from '../helpers'

const initialState = {
  favHerosList: []
}
export const FavoriteHerosContext = createContext({} as any);

export function FavoriteHerosProvider({ children }) {
  const [favheros, setFavheros] = useState(() => getLocalStorage("favHeros", initialState));

  useEffect(() => {
    setLocalStorage("favheros", favheros);
  }, [favheros]);

  return (
    <FavoriteHerosContext.Provider
      value={
        { 
          currentFavHeros: favheros, 
          addFavheros: (newFavHero) => setFavheros({...favheros, favHerosList:[...(favheros.favHerosList),newFavHero]}) 
        }
      }
    >
      {children}
    </FavoriteHerosContext.Provider>
  );
}