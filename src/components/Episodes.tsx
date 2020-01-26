import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import './Episodes.scss';
import useHttpClient from '../hooks/useHttpClient';
import Loading from './Loading';
import Error from './Error';

/**
 * This components show and uses the useHttpClient hook to fetch all the episodes of
 * the selected show. The id of the show will be retrieved from route params.
 * The show will be feteched by the useEffect.
 * on success. Loading.. will be shown while episodes are being
 * fetched and on error, error message will be displayed
 */

interface RouteInfo {
  id: string;
}

function Episodes({ match: { params } }: RouteComponentProps<RouteInfo>) {
  const [result, hasError, isLoading, fetchEpisodes] = useHttpClient();

  useEffect(() => {
    fetchEpisodes(`/${params.id}/episodes`);
  }, [params, fetchEpisodes]);

  if (hasError) {
    return <Error />;
  }

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      {result.map(episode => (
        <div key={episode?.id} className="episode">
          <div>
            <img src={episode.image?.medium} alt={episode.name} />
          </div>
          <div>
            <h2>
              s{episode.season}e{episode.number}
            </h2>
            <h3>{episode.name}</h3>
            <div dangerouslySetInnerHTML={{ __html: episode.summary }} />
          </div>
        </div>
      ))}
    </>
  );
}

export default Episodes;
