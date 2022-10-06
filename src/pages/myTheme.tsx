import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import NavBar from '../components/navbar.components';
// import Cards from '../components/cards.components';
import { ReactComponent as PlayKeyboard } from '../images/playkeyboard.svg';
import { ReactComponent as Search } from '../images/search.svg';
import Card from '../components/card.components';
import Categories from '../components/categories.components';

export interface CardProps {
  imageUrl: string | undefined;
  card: any;
  name: string;
  downloads: string;
  price: number;
  hashtag: Array<string>;
}

const MyTheme: React.FC = () => {
  const [cards, setCards] = useState([]);
  const getCardInfo = () => {
    axios.get('https://api.plkey.app/theme?category=LIVE').then(res => {
      const result = res.data.data;
      const listCards = result.map((card: any) => {
        return card;
      });
      setCards(listCards);
    });
  };
  useEffect(() => {
    getCardInfo();
  }, []);

  const clickSearch = () => {
    alert('준비중입니다.');
  };
  return (
    <MyThemeContainer>
      <MyThemeTop>
        <MainLogo>
          <PlayKeyboard />
        </MainLogo>
        <SearchIcon onClick={clickSearch}>
          <Search />
        </SearchIcon>
      </MyThemeTop>

      <MyThemeSpan>취향대로 골라보기</MyThemeSpan>

      <Categories />

      <ListLayout>
        {cards.map((cards: any) => (
          <Card card={cards} key={cards.id} />
        ))}
        {/* <Cards cards={cards} /> */}
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
  font-weight: bold;
  overflow-y: scroll;
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
  margin-top: 20px;
`;

const MainLogo = styled.div`
  margin-left: 16px;
`;

const SearchIcon = styled.div`
  margin-right: 16px;
  cursor: pointer;
`;

const MyThemeSpan = styled.div`
  font-family: 'Noto Sans CJK KR';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  margin: 10px 0 16px 16px;
`;

const ListLayout = styled.div`
  margin: 0 auto;
  width: 100%;
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
`;
