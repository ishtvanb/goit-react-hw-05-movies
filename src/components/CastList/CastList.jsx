import PropTypes from 'prop-types';
import {
  ActorInfo,
  CharacterImage,
  List,
  ListItem,
  Character,
} from './CastList.styled';
const CastList = ({ cast }) => {
  return (
    <List>
      {cast.map(({ id, character, name, profile_path }) => (
        <ListItem key={id}>
          <CharacterImage
            src={
              profile_path
                ? `https://image.tmdb.org/t/p/w300${profile_path}`
                : 'https://dummyimage.com/500x400/ff6b08/fff.jpg&text=Opps,+no+image...'
            }
            alt={name}
            width="150"
            height="200"
          />
          <ActorInfo>
            <p>
              <span>{name}</span>
            </p>
            <Character>
              <span>{character}</span>
            </Character>
          </ActorInfo>
        </ListItem>
      ))}
    </List>
  );
};

export default CastList;

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    })
  ).isRequired,
};