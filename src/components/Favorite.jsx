import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App';
import { useAppContext } from './context/appContext';

const Favorite = () => {

   const { favorite, addToFavorite, removeFromFavorite } =useAppContext();

    console.log('favorite are', favorite);

    const favoriteChecker = (id) =>{
        const boolean = favorite.some((book) => book.id === id);
        return boolean;
    };
  let navigate = useNavigate();
  const home ='<< Go Home'
    function handleClick() {
    navigate('/')
  }

  return <div className="favorite">
    
    {favorite.length > 0 ? favorite.map((book) => (
        <div key={book.id} className="book">
           <div>
                <h4>{book.title}</h4>
            </div>
            <div>
                <img src={book.image_url} alt="#"/>
            </div>
                <div>
                    {favoriteChecker(book.id) ? (
                <button onClick={() => removeFromFavorite(book.id)}>
                    remove from Favorite
                </button>
                    ) : (
                <button onClick={() => addToFavorite(book)}>
                    Add to Favorite
                    </button>
                    )}
                </div>
                
        </div>
    )):<h1>You dont have any favorite book yet!</h1>}
    <div style={{}}>
    <button
        type="route-btn"
        className="back"
        onClick={() => handleClick()}
     style={{background:'black',height:'50px', width:'auto'}}
     >
       {home} 
      </button>
                                                                                                                                                                                                                                              
      </div>
  </div>;
  
};

export default Favorite;