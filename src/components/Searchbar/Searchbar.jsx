import {
  SearchForm,
  SearchInput,
  SearchButton,
  SearchButtonLabel,
} from './Searchbar.styled';

import { HiMagnifyingGlass } from 'react-icons/hi2';
import PropTypes from 'prop-types';

const Searchbar = ({ onSubmit }) => {
  return (
<SearchForm onSubmit = {onSubmit}>
  <SearchButton type="submit" aria-label="search">
    <HiMagnifyingGlass />
    <SearchButtonLabel>Search</SearchButtonLabel>
  </SearchButton>
      
      <SearchInput
        name="query"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
</SearchForm>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
