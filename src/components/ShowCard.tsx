import React, { useState } from 'react';
import { ShowType } from '../constants/ShowTypes';
import { Link } from 'react-router-dom';
import './ShowCard.scss';

/**
 * A card of a show which will be displayed in the homepage
 * sets its own state to wheter is should show, the show detailes
 * has a onclick for mobile devices and a hover for desktops.
 * <link> will bring the user to the episode page.
 */

interface props {
  show: ShowType;
}

function ShowCard({ show }: props) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      onClick={() => setShowDetails(!showDetails)}
      onMouseEnter={() => setShowDetails(true)}
      onMouseLeave={() => setShowDetails(false)}
      style={{ backgroundImage: `url(${show?.image?.medium})` }}
      className="card"
    >
      {showDetails && (
        <div className="card-details">
          <h3> {show.name}</h3>
          <h4>
            {show.rating.average} | {show.language}
          </h4>
          <Link to={`/episodes/${show.id}`}>Show episodes</Link>
        </div>
      )}
    </div>
  );
}

export default ShowCard;
