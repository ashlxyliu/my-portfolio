import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import BrandPage from './BrandPage';
import ClosetPage from './ClosetPage';

const brands = [
  {
    name: 'For Love & Lemons',
    logo: 'https://forloveandlemons.com/favicon.ico',
    url: 'https://forloveandlemons.com'
  },
  {
    name: 'Isabel Marant',
    logo: 'https://www.isabelmarant.com/favicon.ico',
    url: 'https://www.isabelmarant.com'
  },
  {
    name: 'Zadig & Voltaire',
    logo: 'https://www.zadig-et-voltaire.com/favicon.ico',
    url: 'https://www.zadig-et-voltaire.com'
  },
  // add more brands here
];

const Home = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const closeSearch = () => {
    setIsSearchOpen(false);
  };

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.length > 1) {
      const filteredBrands = brands.filter(brand =>
        brand.name.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredBrands);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    window.open(`https://www.google.com/search?q=${searchQuery} official site`, '_blank');
  };

  return (
    <div>
      <header>
        <div className="logo"><Link to="/">A &</Link></div>
        <div className="nav-search">
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/closet">Closet</Link></li>
              <li><a href="#" onClick={toggleSearch}>Search</a></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <section>
          <h1>
            <a href="https://www.isabelmarant.com/" target="_blank" rel="noopener noreferrer">
              Collection, Isabel Marant Fall-Winter 2024
            </a>
          </h1>
          <div className="image-row">
            <a href="https://www.isabelmarant.com/" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/isabel-marant.jpg`} alt="Isabel Marant Collection" />
            </a>
          </div>
        </section>
        <section>
          <h1>
            <a href="https://www.zadig-et-voltaire.com/" target="_blank" rel="noopener noreferrer">
              Collection, Zadig & Voltaire Spring-Summer 2024
            </a>
          </h1>
          <div className="image-row">
            <a href="https://www.zadig-et-voltaire.com/" target="_blank" rel="noopener noreferrer">
              <img src={`${process.env.PUBLIC_URL}/images/zadig-voltaire.jpg`} alt="Zadig & Voltaire Collection" />
            </a>
          </div>
        </section>
      </main>
      <div className={`search-container ${isSearchOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={closeSearch}>X</button>
        <form onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="What brand are you looking for?"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <div className="search-buttons">
            <button type="submit">Websites</button>
            <button type="button">Products</button>
            <button type="button">Collections</button>
          </div>
        </form>
        <div className="suggestions">
          {suggestions.map((brand, index) => (
            <div className="suggestion" key={index}>
              <img src={brand.logo} alt={brand.name} />
              <div className="suggestion-details">
                <Link to={`/brand/${encodeURIComponent(brand.url)}`}>{brand.name}</Link>
                <a href={brand.url} target="_blank" rel="noopener noreferrer">{brand.url}</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/closet" element={<ClosetPage />} />
          <Route path="/brand/:url" element={<BrandPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

