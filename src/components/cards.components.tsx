import styled from 'styled-components';
import Card from './card.components';

interface cardProps {
  cards: any;
  setCards: any;
}

function Cards({ cards, setCards }: cardProps) {
  return (
    <Wrapper>
      {cards.map((card: any) => (
        <Card card={card} key={card.id} />
      ))}
    </Wrapper>
  );
}

export default Cards;

const Wrapper = styled.div``;
