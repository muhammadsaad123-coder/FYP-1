import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import background from './background2.png';
import searchLogo from './searchlogo.png';

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${background})` }}>
      <nav className="navbar">
        <Link to="/home">Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="search-section">
        <img src={searchLogo} alt="Quran Semantic Search Logo" className="logo"/>
        <input type="text" placeholder="Search Quran..." className="search-bar"/>
        <select className="dropdown">
          <option value="unigram">Unigram</option>
          <option value="bigram">Bigram</option>
        </select>
        <select className="dropdown">
          <option value="keyword">Keyword</option>
          <option value="semantic">Semantic Search</option>
        </select>

        <div>
  <button className="button">
    Search ...
    <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
      <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
    </svg>
  </button>
</div>




        
      </div>
    </div>
  );
}

export default Home;
