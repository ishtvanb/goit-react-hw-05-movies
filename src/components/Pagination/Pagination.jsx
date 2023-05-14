import { StyledReactPaginate } from './Pagination.styled';

import PropTypes from 'prop-types';
const Pagination = ({ pageCount, setSearchParams, params, currentPage }) => {
  const handlePageChange = e => {
    setSearchParams({ ...params, page: e.selected + 1 });
  };

  return (
    <StyledReactPaginate
    previousLabel="<"
      nextLabel=">"
      breakLabel="..."
      breakClassName="break-me"
      pageCount={pageCount}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      renderOnZeroPageCount={null}
      containerClassName="pagination"
      pageClassName="page"
      activeClassName="active"
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageActive={window.scroll({ top: 0, behavior: 'smooth' })}
    />
  );
};

Pagination.propTypes = {
  pageCount: PropTypes.number.isRequired,
  setSearchParams: PropTypes.func.isRequired,
  params: PropTypes.object.isRequired,
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;



