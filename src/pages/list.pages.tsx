import styled from 'styled-components';
import Cards from '../components/cards.components';
import axios from 'axios';
import { useState, useEffect } from 'react';

function List() {
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

  return (
    <Wrapper>
      <Cards cards={cards} setCards={setCards} />
    </Wrapper>
  );
}

export default List;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 373px;
`;
