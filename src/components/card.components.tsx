/* eslint-disable react/destructuring-assignment */
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ReactComponent as IconDownload } from '../images/list/Icon_download.svg';
import { ReactComponent as IconDiamond } from '../images/list/Icon_diamond.svg';
import { CardProps } from '../containers/myTheme.container';

interface CardPageProps {
  card: CardProps;
  key: string;
}

const Card: React.FC<CardPageProps> = cards => {
  const navigator = useNavigate();

  const handleRouting = () => {
    const themeId = cards.card.themeId;
    navigator(`/theme/${themeId}`);
  };

  return (
    <Wrapper onClick={handleRouting}>
      <ImageWrapper src={cards.card.imageUrl} alt="keyboard" />
      <TextWrapper>
        <Name>{cards.card.name}</Name>
        <Tags>{cards.card.hashtag.map((tag: string) => '#' + tag + ' ')}</Tags>
        <IconsWrapper>
          <Download>
            <IconDownload />
            <span> </span>
            {cards.card.downloads}
          </Download>
          <Price>
            <IconDiamond />
            <span> </span>
            {cards.card.price}
          </Price>
        </IconsWrapper>
      </TextWrapper>
    </Wrapper>
  );
};

export default Card;

const Wrapper = styled.div`
  font-family: 'Noto Sans KR', sans-serif;
  font-style: normal;
  cursor: pointer;
`;

const ImageWrapper = styled.img`
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.16);
`;

const TextWrapper = styled.div`
  width: 100%;
  height: 90px;
  display: grid;
`;
const Name = styled.div`
  width: 100%;
  margin: 8px 0 2px 0;
  font-weight: 500;
  font-size: 14px;
  color: #42444c;
`;
const Tags = styled.div`
  margin-bottom: 3px;
  font-weight: 400;
  font-size: 12px;
  color: #aaabb3;
`;
const IconsWrapper = styled.div`
  line-height: 18px;
  font-weight: 500;
  font-size: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Download = styled.div`
  color: #aaabb3;
`;
const Price = styled.div`
  color: #7dc9fc;
`;
