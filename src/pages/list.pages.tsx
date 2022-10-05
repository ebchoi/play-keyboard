import styled from 'styled-components';
import Cards from '../components/cards.components';
import axios from 'axios';
import { useState, useEffect } from 'react';

function List() {
  const [cards, setCards] = useState([]);

  const getCardInfo = () => {
    axios.get('https://api.plkey.app/theme?category=LIVE').then(res => {
      console.log('RES', res.data.data);
      const result = res.data.data;
      const listCards = result.map((card: any) => {
        return card;
      });
      setCards(listCards);
      console.log('setCards', setCards);
    });
  };

  useEffect(() => {
    getCardInfo();
  }, []);

  return (
    <Wrapper>
      <Cards cards={cards} setCards={setCards} />
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
