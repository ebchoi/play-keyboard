import styled from 'styled-components';

interface ReactionProps {
  emoji: string;
  reaction: string;
  count: number;
  selected?: boolean;
}

const Reaction: React.FC<ReactionProps> = ({ emoji, reaction, count }) => {
  return (
    <Wrapper>
      <Emoji>{emoji}</Emoji>
      <Text>{reaction}</Text>
      <Count>{count}</Count>
    </Wrapper>
  );
};
export default Reaction;

const Wrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: '#919299';
`;

const Emoji = styled.div`
  font-size: 30px;
  margin: 10px 0;
`;

const Text = styled.div``;

const Count = styled.div``;
