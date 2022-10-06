import './App.css';
import {Routes,Route, RouterProvider } from 'react-router-dom'
import BookList from './components/BookList';
import BookDetails from './components/BookDetails';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<BookList />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/" element={<BookList />} />
      </Routes>
      
    </div>
  );
}

export default App;
