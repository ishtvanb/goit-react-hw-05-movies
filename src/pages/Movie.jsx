import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Searchbar from 'components/Searchbar/Searchbar';
import Pagination from 'components/Pagination/Pagination';
import Loader from 'components/Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

import MoviesList from 'components/MoviesList/MoviesList';
import { fetchMoviesByName } from 'services/movie-api';
import Container from 'components/Container/Container';
import BackToTopButton from 'components/BackToTop/BackToTop';

const Movies = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({
    page: 1,
    query: '',
  });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]);
  const page = Number(params.page || 1);
  const { query } = params;

  useEffect(() => {
    if (!query) {
      return;
    }
    const loadMoviesByQuery = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results, total_pages, total_results } = await fetchMoviesByName(
          page,
          query
        );
        setMovies(results);
        setTotalPages(total_pages);
        setTotalResults(total_results);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMoviesByQuery();
  }, [page, query]);

  const handleSubmit = e => {
    e.preventDefault();
    const query = e.target.elements.query.value.trim();
    if (!query) {
      toast.error('Please type something');
      return;
    }
    setSearchParams({ query: query, page: 1 });
    e.target.reset();
  };

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : (
        <Container>
          <Searchbar onSubmit={handleSubmit} />
          {isLoading && <Loader />}
          {totalResults === 0 && query && !error ? (
            <h2>No results found</h2>
          ) : (
            <>
              <MoviesList movies={movies} />
              {totalPages !== 0 && (
                <Pagination
                  pageCount={totalPages}
                  setSearchParams={setSearchParams}
                  params={params}
                  currentPage={page - 1}
                />
              )}
            </>
          )}
          <Toaster />
          <BackToTopButton />
        </Container>
      )}
    </main>
  );
};

export default Movies;
