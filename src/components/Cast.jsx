import { useState, useEffect } from 'react';
import { fetchMovieCast } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import Loader from './Loader/Loader';
import CastList from './CastList/CastList';

const Cast = () => {
  const { Id } = useParams();
  const [movieCast, setMovieCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieCast = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { cast } = await fetchMovieCast(Id);
        setMovieCast(cast);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovieCast();
  }, [Id]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {isLoading && <Loader />}
          {movieCast?.length === 0 && !error ? (
            <p>We didn't find info about cast</p>
          ) : (
            <CastList cast={movieCast} />
          )}
        </>
      )}
    </>
  );
};

export default Cast;
