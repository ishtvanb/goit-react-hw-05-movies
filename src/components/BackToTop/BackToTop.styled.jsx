import styled from '@emotion/styled';

export const Button = styled.button`
position: fixed;
  @media screen and (min-width: 766px) {
    height: 42px;
    width: 42px;
  }
  right: 15px;
  bottom: 30px;
  height: 32px;
  width: 32px;
  padding: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  animation: fadeIn 0.3s;
  opacity: 0.5;
  background: green;
  border-radius: 4px;
  border: 0;
  z-index: 1000;
  transition: opacity 0.4s, color ease-in-out 0.2s, background ease-in-out 0.2s;
  display: ${({ isScrollButtonVisible }) =>
  isScrollButtonVisible ? 'flex' : 'none'};

  &:hover {
    opacity: 1;
  }

  svg {
    stroke: #ffffff;
  }
`; 
