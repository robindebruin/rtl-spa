import React, { useEffect } from 'react';
import ShowCard from './ShowCard';
import './Shows.scss';
import useHttpClient from '../hooks/useHttpClient';
import Loading from './Loading';
import Error from './Error';

/**
 * component fetches all shows on load via HttpClient
 * and stores them in state. Will show loading while
 * shows is Loading, while loading (and on error atm)
 */

function Shows() {
  const [shows, hasError, isLoading, fetchShows] = useHttpClient();

  useEffect(() => {
    fetchShows();
  }, [fetchShows]);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error />;
  }

  return (
    <div className="shows">
      {shows.map(s => (
        <ShowCard key={s.id} show={s} />
      ))}
    </div>
  );
}

export default Shows;
