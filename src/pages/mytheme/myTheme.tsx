import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navbar.components';
import PlayKeyboard from '../../images/playkeyboard.svg';
import Search from '../../images/search.svg';

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
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0px;
  margin-left: 80px;
  /* justify-content: center; */
  z-index: 100;
`;

const MyThemeTop = styled.div`
  display: flex;
`;

const MainLogo = styled.div`
  margin: 0px 221px 0 16px;
`;

const SearchIcon = styled.div`
  margin-right: 16px;
`;
