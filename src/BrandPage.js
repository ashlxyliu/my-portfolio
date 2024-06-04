import React from 'react';
import { useParams } from 'react-router-dom';

const BrandPage = () => {
  const { url } = useParams();
  const decodedUrl = decodeURIComponent(url);

  return (
    <div>
      <header>
        <div className="logo">A &</div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Closet</a></li>
            <li><a href="/">Search</a></li>
          </ul>
        </nav>
      </header>
      <div className="iframe-container">
        <iframe src={decodedUrl} title="Brand Website" width="100%" height="800px" />
      </div>
    </div>
  );
}

export default BrandPage;
