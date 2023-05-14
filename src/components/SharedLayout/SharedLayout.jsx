import { Outlet } from 'react-router-dom';
import { Header, Logo, StyledLink } from './SharedLayout.styled';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';
import { BiMoviePlay } from 'react-icons/bi';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <Logo to="/">
          <span role="img" aria-label="movie icon">
            <BiMoviePlay size="40" />
          </span>
          Movies App
        </Logo>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};