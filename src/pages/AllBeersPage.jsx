import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function AllBeersPage() {
  const [beers, setBeers] = useState([]);

  const getAllBeers = () => {
    axios
    .get('https://ih-beers-api2.herokuapp.com/beers')
    .then(response => {setBeers(response.data);})
      .catch(error => {console.error('Error fetching beers:', error);});
  };

  useEffect(() => {
    getAllBeers();
  }, []);

  return (
    <div>
      <h2>All Beers</h2>
      <div>
        {beers.map(beer => (
          <div key={beer._id} className="beer-card">
            <img src={beer.image_url} alt={beer.name} />
            <div>
              <h3>{beer.name}</h3>
              <p>{beer.tagline}</p>
              <p>Contributed by: {beer.contributed_by}</p>
              <Link to={`/beers/${beer._id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllBeersPage;