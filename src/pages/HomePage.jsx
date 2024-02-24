import React from 'react';

function HomePage() {
  return (
    <div className="home-page">
      <h2>Welcome to IronBeers!</h2>
      <p>Discover the world of beers with us.</p>
      <div className="links">
        <a href="/all-beers">
          <div className="link-card">
            <img src="src/assets/beers.png" alt="All Beers" />
            <h3>All Beers</h3>
            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>
          </div>
        </a>
        <a href="/random-beer">
          <div className="link-card">
            <img src="src/assets/random-beer.png" alt="Random Beer" />
            <h3>Random Beer</h3>
            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>

          </div>
        </a>
        <a href="/new-beer">
          <div className="link-card">
            <img src="src/assets/new-beer.png" alt="New Beer" />
            <h3>New Beer</h3>
            <p1>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p1>

          </div>
        </a>
      </div>
    </div>
  );
}
export default HomePage;