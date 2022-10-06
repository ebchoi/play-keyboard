import { colors } from '../styles/theme';
import styled from 'styled-components';

function Reaction({ emoji, reaction, count, selected }) {
  return (
    <Wrapper selected={selected ? 1 : 0}>
      <Emoji>{emoji}</Emoji>
      <Text>{reaction}</Text>
      <Count>{count}</Count>
    </Wrapper>
  );
}
export default Reaction;

const Wrapper = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ selected }) => (selected ? colors.pink : '#919299')};
`;

const Emoji = styled.div`
  font-size: 30px;
  margin: 10px 0;
`;

const Text = styled.div``;

const Count = styled.div``;
