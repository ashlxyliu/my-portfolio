import React, { useState } from 'react';
import './ClosetPage.css';

const ClosetPage = () => {
  const [link, setLink] = useState('');
  const [images, setImages] = useState([]);

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleFetchImage = async () => {
    const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=YOUR_API_KEY&cx=YOUR_CX&q=${link}&searchType=image`);
    const data = await response.json();
    const imageUrl = data.items[0]?.link;
    if (imageUrl) {
      setImages([...images, imageUrl]);
    } else {
      alert('No image found for the provided link.');
    }
  };

  return (
    <div className="closet-page-container">
      <header>
        <div className="logo"><a href="/">A &</a></div>
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/closet">Closet</a></li>
            <li><a href="/search">Search</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className="input-container">
          <input
            type="text"
            placeholder="Paste product link here"
            value={link}
            onChange={handleLinkChange}
          />
          <button onClick={handleFetchImage}>Fetch Image</button>
        </div>
        <div className="image-gallery">
          {images.map((image, index) => (
            <img key={index} src={image} alt={`Product ${index}`} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default ClosetPage;
