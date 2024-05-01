import React from 'react';
import './blog.css';

function Blog() {
  return (
    <div className='blog'>
      <h2 className="blog-head">Discover & Explore: Travel Inspiration</h2>
      <div className="blog-row">
        <div className="blog-leftcolumn">
          <div className="blog-card">
            <h2 className="blog-font">"Explore the India: Wanderlust Chronicles"</h2>
            <h5 className="blog-para" id='blog-date'>posted on: 23 April, 2023</h5>
            <div className="blog-fakeimg" style={{ height: '263px' }}>
              <img src="https://images.pexels.com/photos/3278215/pexels-photo-3278215.jpeg?cs=srgb&dl=pexels-freestockpro-3278215.jpg&fm=jpg" alt="Travel Image" />
            </div>
            <p className="blog-para">
              Traveling is a transformative journey that transcends mere movement from one place to another; it's an exploration of both outer landscapes and inner horizons. It's about immersing oneself in new cultures, savoring exotic cuisines, and forging connections with people from different walks of life.
            </p>
          </div>
          <div className="blog-card">
            <h2 className="blog-font">"Roaming Routes: Tales from Around the India"</h2>
            <h5 className="blog-para" id='blog date'>Posted on: Jan 2, 2023</h5>
            <div className="blog-fakeimg" style={{ height: '310px' }}>
              <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgUROQW3Yh4FhhvzWEwa_mOBP7aSQ63euPi89k9QDBE9czBl7sSkDB2fWSZ41bahe1En9Ar0OpPfPhxfTvlHk4hHsSAkgZSqPKWZ5voPR-i8oSB_IMDliroGinCro8OqTiT7BKrfVfm7sCY/s1600/ranukumbolo.png" alt="Travel Image" />
            </div>
            <p className="blog-para">
              With Roaming Routes, your travel experience is not limited to typical tourist attractions. We delve deeper into each destination, uncovering hidden gems, local traditions, and unique experiences that are off the beaten path. Whether you're craving an adrenaline-fueled adventure, a culinary escapade, or a serene retreat, our curated itineraries and insider tips ensure that every moment of your journey is filled with wonder and excitement.
            </p>
          </div>
        </div>
        <div className="blog-rightcolumn">
          <div className="blog-Card">
            <h2 className="blog-font">About Travelo</h2>
            <img src="https://i.pinimg.com/564x/14/c3/3f/14c33f66f73bbb45452ad43fc21113f1.jpg" alt="Travelo" />
            <p className="blog-para">
              Unlock the world with Travelo: Where every journey begins with a click.
              Discover, dream, explore: Let Travelo guide your wanderlust.
              From booking to bliss: Travelo turns your travel dreams into reality.
              Navigate the globe with ease: Travelo, your ultimate travel companion.
            </p>
          </div>
          <div className="blog-card1">
            <h3 className="blog-font">Popular Post: You must visit these places</h3>
            <img src="https://i.pinimg.com/564x/27/bc/56/27bc565cd85931b0a58b62a80e5c4cab.jpg" alt="Place to Visit" />
            <img src="https://i.pinimg.com/564x/fd/62/45/fd62459bcf5d31170ce3dca634225ca8.jpg" alt="Place to Visit" /><br/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
