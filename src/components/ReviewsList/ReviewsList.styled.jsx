import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
  height: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

export const ReviewAuthor = styled.h3`
  margin-bottom: 10px;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const ReviewContent = styled.p`
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

