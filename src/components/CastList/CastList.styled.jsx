import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 25px;
  height: 300px;
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

  @media screen and (min-width: 320px) {
    gap: 20px;
  }
  @media screen and (min-width: 768px) {
    gap: 49px;
  }
  @media screen and (min-width: 1024px) {
    column-gap: 48px;
    row-gap: 40px;
  }
`;

export const ListItem = styled.li`
width: calc((100% - 20px) / 2);

  @media screen and (min-width: 768px) {
    width: calc((100% - 25px) / 5);
  }
  @media screen and (min-width: 1024px) {
    width: calc((100% - 48px) / 6);
  }
`;

export const CharacterImage = styled.img`
  display: block;
  width: 100%;
  height: 285px;
`;

export const ActorInfo = styled.div`
  padding: 10px;
  text-align: center;
`;

export const Character = styled.p`
color: blue;
  font-size: large;
`;


