import { createContext ,useContext } from "react";
import { useState } from 'react';

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext);
    
    if(context ===undefined){
        throw new Error("AppContext must be within AppContextProvider!");
    }
    return context;
};

const AppContextProvider = ({children}) => {
    const [favorite,setFavorite] = useState([]);

const addToFavorite = (book) =>{
    const oldFavorite = [...favorite];

    const newFavorite = oldFavorite.concat(book);
    
setFavorite(newFavorite);

};


const removeFromFavorite = (id) => {
    const oldFavorite = [...favorite];
   const newFavorite = oldFavorite.filter((book) => book.id !== id);

   setFavorite(newFavorite);

};



    return (
        <AppContext.Provider 
        value={{ favorite, addToFavorite, removeFromFavorite }}
        >
            {children}
        </AppContext.Provider>
    );
    };

export default AppContextProvider;