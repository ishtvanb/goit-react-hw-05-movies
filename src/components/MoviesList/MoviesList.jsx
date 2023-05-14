import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem, Wrapper, StyledLink, Text } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <List>
      {movies.map(({ poster_path, title, id }) => (
        <ListItem key={id}>
          <StyledLink to={`/movies/${id}`} state={{ from: location }}>
            <Wrapper>
              <img
                src={
                  poster_path
                    ? `https://image.tmdb.org/t/p/w500${poster_path}`
                    : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
                }
                alt={title}
              />
              <span>Click to see more info</span>
              <Text>{title}</Text>
            </Wrapper>
          </StyledLink>
        </ListItem>
      ))}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MoviesList;

