import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 25px;
  @media screen and (min-width: 320px) {
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    gap: 32px;
  }
  @media screen and (min-width: 1280px) {
    column-gap: 16px;
    row-gap: 32px;
  }
`;

export const ListItem = styled.li`
min-width: 280px;

  @media screen and (min-width: 768px) {
    width: calc((100% - 32px) / 2);
  }
  @media screen and (min-width: 1280px) {
    width: calc((100% - 2 * 16px) / 3);
  }
`;

export const Wrapper = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  overflow: hidden;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(255, 255, 255, 0);
  transition: box-shadow 0.3s ease-in-out;
  position: relative;

  img {
    display: block;
    width: 280px;
    height: 398px;
    margin-bottom: 8px;
    transition: filter 0.3s ease-in-out, opacity 0.3s ease-in-out;

    @media screen and (min-width: 768px) and (max-width: 1279px) {
      width: 336px;
      height: 455px;
    }

    @media screen and (min-width: 1280px) {
      width: 395px;
      height: 574px;
      margin-bottom: 12px;
    }
  }

span {
    display: block;
    position: absolute;
    top: 40%;
    right: 50%;
    transform: translate(-40%, -50%);
    visibility: hidden;
    color: black;
    font-weight: bold;
    transition: visibility 0s ease-in-out;
  }

  &:hover,
  &:focus {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.8);

    img {
      filter: blur(3px);
      opacity: 0.7;
      transition: opacity 0.3s ease-in-out;
    }

    span {
      visibility: visible;
      transform: translate(50%, 50%);
      transition: visibility 0s ease-in-out 0.3s;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1279px) {
    width: 336px;
  }

  @media screen and (min-width: 1280px) {
    width: 395px;
  }
`;

export const Text = styled.p`
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
`;

