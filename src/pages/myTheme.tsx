import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navbar.components';
import { ReactComponent as PlayKeyboard } from '../images/playkeyboard.svg';
import { ReactComponent as Search } from '../images/search.svg';
import List from './list.pages';

const MyTheme: React.FC = () => {
  return (
    <MyThemeContainer>
      <MyThemeTop>
        <MainLogo>
          <PlayKeyboard />
        </MainLogo>
        <SearchIcon>
          <Search />
        </SearchIcon>
      </MyThemeTop>
      <MyThemeSpan>취향대로 골라보기</MyThemeSpan>

      <ListLayout>
        <List />
      </ListLayout>

      <MainNavigation>
        <NavBar serviceType="MYTHEME" />
      </MainNavigation>
    </MyThemeContainer>
  );
};

export default MyTheme;

const MyThemeContainer = styled.div`
  width: 373px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  font-size: 100px;
  font-weight: bold;
  border: 1px solid black;
`;

const MainNavigation = styled.div`
  position: fixed;
  display: flex;
  bottom: 0px;
  z-index: 100;
`;

const MyThemeTop = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MainLogo = styled.div`
  margin-left: 16px;
`;

const SearchIcon = styled.div`
  margin-right: 16px;
`;

const MyThemeSpan = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  /* line-height: 24px; */
  margin-left: 16px;
`;

const ListLayout = styled.div`
  width: 100%;
  overflow-y: scroll;
`;
