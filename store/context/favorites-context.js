import {createContext, useState} from 'react';

export const FavoritesContext = createContext();

export const FavoriteContextWrapper = ({children}) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([]);

  const addFavorite = id => {
    setFavoriteMealIds(prev => [...prev, id]);
  };
  const removeFavorite = id => {
    setFavoriteMealIds(prev => prev.filter(item => item !== id));
  };
  const value = {
    favoriteMealIds,
    addFavorite,
    removeFavorite,
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};
