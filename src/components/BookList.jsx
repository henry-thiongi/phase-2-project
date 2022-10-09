import React,{useState,useEffect} from 'react';
import '../App';
import { API_URL } from '../API';
import axios from 'axios'; 
import { useAppContext } from './context/appContext';
import { useNavigate } from 'react-router-dom';

const BookList = () => {
    
    const [books,setBooks] = useState([]);

    const { favorite, addToFavorite, removeFromFavorite } = useAppContext();

    const navigate = useNavigate();

    const favoriteChecker = (id) =>{
        const boolean = favorite.some((book) => book.id === id);
        return boolean;
    };

    useEffect(()=> {
      axios
      .get(API_URL)
      .then(res=> {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(err=>console.log(err));
 },[]);

return (
<div className="book-list">
    {books.map((book) => (
        <div key={book.id} className="book">
           <div>
                <h4>{book.title}</h4>
            </div>
            <div>
                <img 
                src={book.image_url} 
                alt="#" 
                onClick={() => navigate(`/books/${book.id}`)}
                />
            </div>
                <div>
                    {favoriteChecker(book.id) ? (
                <button onClick={() => removeFromFavorite(book.id)}>
                    remove from Favorite
                </button>
                    ) : (
                <button onClick={()=> addToFavorite(book)}>
                    Add to Favorite
                    </button>
                    )}
                </div>
        </div>
    ))}
    </div>
);
                    
                    };

export default BookList;