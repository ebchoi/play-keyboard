import styled from 'styled-components';
import Card from './card.components';

interface cardProps {
  cards: any;
}

function Cards({ cards }: cardProps) {
  return (
    <Wrapper>
      {cards.map((card: any) => (
        <Card
          card={card}
          key={card.id}
          imageUrl={undefined}
          name=""
          downloads=""
          price={0}
          hashtag={[]}
        />
      ))}
    </Wrapper>
  );
}

export default Cards;

const Wrapper = styled.div`
  padding: 1.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1.2rem;
`;
