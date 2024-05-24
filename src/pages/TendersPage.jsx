import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SearchBar from '../components/SearchBar';
import TenderList from '../components/TenderList';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <div className="container my-4">
        <SearchBar setSearchQuery={setSearchQuery} />
        <TenderList searchQuery={searchQuery} />
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
