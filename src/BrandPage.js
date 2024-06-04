import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './BrandPage.css';

const BrandPage = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);

  return (
    <div className="brand-page-container">
      <header>
        <div className="logo"><Link to="/">A &</Link></div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/">Closet</Link></li>
            <li><Link to="/">Search</Link></li>
          </ul>
        </nav>
      </header>
      <div className="iframe-container">
        <iframe src={decodedUrl} title="Brand Website" />
      </div>
    </div>
  );
}

export default BrandPage;
