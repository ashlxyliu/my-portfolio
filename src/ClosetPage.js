import React, { useState } from 'react';
import './ClosetPage.css';

const ClosetPage = () => {
  const [link, setLink] = useState('');
  const [images, setImages] = useState([]);

  const handleLinkChange = (e) => {
    setLink(e.target.value);
  };

  const handleFetchImage = async () => {
    const apiKey = 'AIzaSyCzqeJ9LdmrtzhekV3o2q3nVbek_Lq3zkU';
    const cx = 'e42b8d47d24c24964';

    try {
      const query = encodeURIComponent(link);
      console.log(`Fetching image for query: ${query}`);
      const response = await fetch(`https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${cx}&q=${query}&searchType=image`);
      const data = await response.json();
      console.log('API Response:', data);

      if (data.items && data.items.length > 0) {
        const imageUrl = data.items[0].link;
        console.log('Image URL:', imageUrl);
        setImages([...images, imageUrl]);
      } else {
        console.warn('No image found for the provided link.');
        alert('No image found for the provided link.');
      }
    } catch (error) {
      console.error('Error fetching the image:', error);
      alert('An error occurred while fetching the image.');
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
