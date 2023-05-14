import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import Pagination from 'components/Pagination/Pagination';
import MoviesList from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'services/movie-api';
import Loader from 'components/Loader/Loader';
import Container from 'components/Container/Container';
import BackToTopButton from 'components/BackToTop/BackToTop';

const Home = () => {
  const [totalPages, setTotalPages] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams({ page: 1 });
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams]
  );
  const page = Number(params.page || 1);

  useEffect(() => {
    const loadMovies = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { results, total_pages } = await fetchTrendingMovies(page);
        setMovies(results);
        setTotalPages(total_pages);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadMovies();
  }, [page]);

  return (
    <main>
      {error ? (
        <p>{error}</p>
      ) : (
          <Container>
            <h1 style={{ marginBottom: '20px' }}>Trending movies</h1>
          {isLoading && <Loader />}
          <MoviesList movies={movies} />
          {totalPages !== 0 && (
            <Pagination
              pageCount={totalPages}
              setSearchParams={setSearchParams}
              params={params}
              currentPage={page - 1}
            />
          )}
          <BackToTopButton />
          </Container>
      )}
    </main>
  );
};

export default Home;