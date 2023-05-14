import PropTypes from 'prop-types';
import { List, ReviewAuthor, ReviewContent } from './ReviewsList.styled';

const ReviewsList = ({ reviews }) => {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <li key={id}>
          <ReviewAuthor>{author}</ReviewAuthor>
          <ReviewContent>{content}</ReviewContent>
        </li>
      ))}
    </List>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ReviewsList;