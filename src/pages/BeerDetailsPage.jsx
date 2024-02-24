import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function BeerDetailsPage() {
  const [beer, setBeer] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    const fetchBeerDetails = async () => {
      try {
        const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`);
        setBeer(response.data);
      } catch (error) {
        console.error('Error fetching beer details:', error);
      }
    };

    fetchBeerDetails();
  }, [beerId]);

  return (
    <div>
      <h1>Beer Details</h1>
      {!beer && <h3>Loading...</h3>}
      {beer && (
        <>
          <h2>{beer.name}</h2>
          <img src={beer.image_url} alt={beer.name} />
          <p>{beer.tagline}</p>
          <p>First Brewed: {beer.first_brewed}</p>
          <p>Attenuation Level: {beer.attenuation_level}</p>
          <p>Description: {beer.description}</p>
          <p>Contributed by: {beer.contributed_by}</p>
          <Link to="/beers">Back</Link>
        </>
      )}
    </div>
  );
}

export default BeerDetailsPage;
