import styled from '@emotion/styled';
import ReactPaginate from 'react-paginate';

export const StyledReactPaginate = styled(ReactPaginate)`
  display: flex;
  flex-wrap: nowrap;
  gap: 5px;
  padding: 0;
  margin-bottom: 30px;
  color: blue;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  list-style: none;

.previous {
    padding: 5px 10px;
    @media screen and (min-width: 768px) {
      padding: 10px 15px;
    }

    background-color: gainsboro;
    border-radius: 5px;
    cursor: pointer;
  }

  .next {
    padding: 5px 10px;
    @media screen and (min-width: 768px) {
      padding: 10px 15px;
    }
    background-color: gainsboro;
    border-radius: 5px;
    cursor: pointer;
  }

  .page {
    padding: 5px 10px;
    @media screen and (min-width: 768px) {
      padding: 10px 15px;
    }
    background-color: gainsboro;
    border-radius: 5px;
    cursor: pointer;
  }

  .disabled {
    color: grey;
  }
  .active {
    background-color: green;
    color: white;
  }
`;

