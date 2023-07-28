import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import Books from './components/BookList';
import Categories from './components/Categories';

function App() {
  return (
    <>
      <Navbar />
      <div className="all-container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
