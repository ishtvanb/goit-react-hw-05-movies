import styled from '@emotion/styled';

export const SearchForm = styled.form`
  display: flex;
  margin: 0 auto;
  margin-bottom: 30px;
  align-items: center;
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  overflow: hidden;
  font-size: 20px;
  border: 2px solid blue;
`;

export const SearchInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 48px;
  padding-left: 20px;
  font-size: 20px;
  border: none;
  padding-top: 7px;
  padding-bottom: 10px;

  ::placeholder {
    font-size: 18px;
  }
`;

export const SearchButton = styled.button`
  display: inline-block;
  padding: 5px;
  width: 48px;
  height: 48px;
  border: 0;
  background-color: white;
  cursor: pointer;

  svg {
    fill: black;
    font-size: 24px;
  }
`;

export const SearchButtonLabel = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;
