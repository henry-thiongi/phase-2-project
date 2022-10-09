import React,{ useState,useEffect } from 'react';
import '../App';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import { BOOK_DETAILS_URL } from '../API';

const BookDetails = () => {
  let navigate = useNavigate();
  function goHome() {
    navigate('/')
  }
   function goTofavorite() {
    navigate('/Favorite')
  }
const [book,setBook] = useState({});

  const  { id } = useParams(); 
 
  useEffect(()=> {
    axios
    .get(`${BOOK_DETAILS_URL}/${id}`)
    .then((res) => {
      setBook(res.data);
      console.log(res.data);
    })
    .catch((err) => console.log(err));
  },[id]);
  const home ='<< Go Home'
    const favorite ='To Favorite>>'


  return (
    <div>
       <div className='side' >
      <button
        
        className="back"
        onClick={() => goHome()}
     style={{background:'black'}}
     >
       {home} 
      </button>
      <button
       
        className="back"
        onClick={() => goTofavorite()}
     style={{background:'black',height:'70px', width:'auto'}}
     >
       {favorite} 
      </button> 
      </div>
  <div className="book-details">
     
    <div className="book-image">
     
      <h2>{book?.title}</h2>
      <img src={book?.image_url} alt="#"/>
    </div>
<div className="book-description">
  <h2>Description</h2>
  <p>{book?.description}</p>
  <h2>Authors</h2>
  <p>{book?.authors}</p>
  <h2>Genres</h2>
  <p>{book?.genres}</p>
</div>
  </div>
    </div>
  );
  
  
};

export default BookDetails;