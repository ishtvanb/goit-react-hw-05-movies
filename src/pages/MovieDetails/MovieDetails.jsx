import { Outlet, useParams, useLocation } from 'react-router-dom';
import { fetchMovieDetails } from 'services/movie-api';
import { useState, useEffect, useRef } from 'react';
import Loader from 'components/Loader/Loader';
import {
  GoBackLink,
  MovieTitle,
  MovieWrapper,
  MoviePoster,
  UserScore,
  ListOfLinks,
  InfoLink,
  Info,
  OverviewTitle,
  OverviewContent,
  Genres,
  GenresTitle,
  Container,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const { Id } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
  const [movieInfo, setMovieInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadMovieDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const result = await fetchMovieDetails(Id);
        setMovieInfo(result);
      } catch (error) {
        setError('Error while loading data. Try again later.');
      } finally {
        setIsLoading(false);
      }
    };
    loadMovieDetails();
  }, [Id]);

  const { title, release_date, poster_path, vote_average, overview, genres } =
    movieInfo;
  const genresInfo = genres?.map(genre => genre.name).join(', ');
  return (
    <>
      {error ? (
        <p>{error}</p>
      ) : (
          <Container>
            {isLoading && <Loader />}
            <GoBackLink to={backLinkLocationRef.current}>Go Back</GoBackLink>
            <MovieWrapper>
            <MoviePoster
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w500${poster_path}`
                  : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
              }
              alt={title}
              height="500"
            />
            <Info>
              <MovieTitle>
                {title}(
                {release_date?.slice(0, 4)
                  ? release_date?.slice(0, 4)
                  : 'Unknown'}
                )
              </MovieTitle>
              <UserScore>
                User score: {Math.round(vote_average * 10)}%
              </UserScore>
              <GenresTitle>Genres</GenresTitle>
              <Genres>{genresInfo ? genresInfo : 'Unknown genre'}</Genres>
              <OverviewTitle>Overview</OverviewTitle>
              <OverviewContent>{overview}</OverviewContent>
            </Info>
            </MovieWrapper>
            <ListOfLinks>
              <li>
              <InfoLink to="cast">Cast</InfoLink>
            </li>
            <li>
              <InfoLink to="reviews">Reviews</InfoLink>
            </li>
            </ListOfLinks>
           <Outlet />
        </Container>
      )}
    </>
  );
};

export default MovieDetails;