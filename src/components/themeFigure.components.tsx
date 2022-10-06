import styled from 'styled-components';

function Figure({ imageUrl, keyword }) {
  return <Image src={imageUrl} alt={keyword} />;
}
export default Figure;

const Image = styled.img`
  width: 33%;
`;
