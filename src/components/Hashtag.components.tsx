import { colors } from '../styles/theme';
import styled from 'styled-components';

function Hashtag({ keyword }: { keyword: string }) {
  return <Span>{keyword}</Span>;
}
export default Hashtag;

const Span = styled.span`
  padding: 5px 10px;
  border-radius: 18px;
  background-color: #ebedf5;
  color: ${colors.bodyGray};
`;
