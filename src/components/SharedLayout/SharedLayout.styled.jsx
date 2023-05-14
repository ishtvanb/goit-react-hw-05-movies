import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

  > nav {
    display: flex;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 0;
  gap: 5px;
  text-decoration: none;
  color: black;
`;  

export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: blue;
  }
`;


