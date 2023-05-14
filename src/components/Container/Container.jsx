import { Wrapper } from './Container.styled';
import PropTypes from 'prop-types';
const Container = ({ children }) => <Wrapper>{children}</Wrapper>;

Container.propTypes = {
  children:PropTypes.any.isRequired,
};
export default Container;