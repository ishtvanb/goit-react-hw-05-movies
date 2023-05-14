import { useState, useEffect } from 'react';
import { fetchMovieReviews } from 'services/movie-api';
import { useParams } from 'react-router-dom';
import Loader from './Loader/Loader';
import ReviewsList from './ReviewsList/ReviewsList';

const Reviews = () => {
  const { Id } = useParams();
  const [movieReviews, setMovieReviews] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieReviews = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results, total_results } = await fetchMovieReviews(Id);
        setMovieReviews(results);
        setTotalResults(total_results);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovieReviews();
  }, [Id]);

  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
          {isLoading && <Loader />}
          {totalResults === 0 && !error ? (
            <p>We didn't find any reviews for this movie</p>
          ) : (
            <ReviewsList reviews={movieReviews} />
          )}
   </>
)}
    </>
  );
};

export default Reviews;