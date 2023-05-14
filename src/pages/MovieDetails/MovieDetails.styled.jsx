import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
  ;`

export const GoBackLink = styled(Link)`
  display: inline-block;
  padding: 8px 12px;
  margin-bottom: 10px;
  text-decoration: none;
  color: black;
  background-color: gainsboro;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;

export const MovieWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;

   @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MoviePoster = styled.img`
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  align-self: flex-start;

  @media screen and (max-width: 768px) {
    max-height: 450px;
    align-self: center;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: flex-start;
  padding: 10px 20px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  }
`;

export const MovieTitle = styled.h2`
  margin-top: 10px;
  font-size: 2rem;
  font-weight: 700;

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const UserScore = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  margin: 10px 0;
  display: flex;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const GenresTitle = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Genres = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const OverviewTitle = styled.h3`
  margin: 15px 0 5px 0;
  font-size: 1.5rem;
  font-weight: 500;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const OverviewContent = styled.p`
  margin: 5px 0;
  font-size: 1rem;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const ListOfLinks = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  list-style: none;
  margin: 10px 0;
`;

export const InfoLink = styled(Link)`
display: inline-block;
  padding: 8px 12px;
  text-decoration: none;
  color: black;
  background-color: gainsboro;
  border-radius: 5px;
  transition: background-color 0.3s ease-in-out;

  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;

