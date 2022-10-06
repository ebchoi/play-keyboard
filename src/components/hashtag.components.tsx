import { colors } from '../styles/theme';
import styled from 'styled-components';

interface HashtagProps {
  keyword: string;
}

const Hashtag: React.FC<HashtagProps> = ({ keyword }) => {
  return <Span>{keyword}</Span>;
};
export default Hashtag;

const Span = styled.span`
  margin: 0 0 10px 0;
  padding: 5px 10px;
  border-radius: 18px;
  background-color: #ebedf5;
  color: ${colors.bodyGray};
  cursor: pointer;
`;
