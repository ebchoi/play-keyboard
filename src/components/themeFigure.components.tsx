import styled from 'styled-components';

interface FigureProps {
  imageUrl: string;
  keyword: string;
}

const Figure: React.FC<FigureProps> = ({ imageUrl, keyword }) => {
  return <Image src={imageUrl} alt={keyword} />;
};
export default Figure;

const Image = styled.img`
  width: 33%;
  cursor: pointer;
`;
