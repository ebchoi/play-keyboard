import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router';
import styled from 'styled-components';
import { colors, device } from '../styles/theme';
import { ReactComponent as BackToolbar } from '../images/detail/ic_toolbar_back.svg';
import { ReactComponent as AllShare } from '../images/detail/ic_all_share.svg';
import Hashtag from '../components/hashtag.components';
import Figure from '../components/themeFigure.components';
import Reaction from '../components/emojiButton.components';

const WebApp: React.FC = () => {
  const navigator = useNavigate();
  let { themeId } = useParams();

  interface DataProps {
    name: string;
    creator: string;
    imageUrl: string;
    isLiveTheme?: boolean;
    hashtag?: Array<string>;
    figure?: Array<Item>;
  }

  interface Item {
    imageUrl: string;
    keyword: string;
  }

  const [data, setData] = useState<DataProps>();

  const getData = async () => {
    let url = `${process.env.REACT_APP_BASE_URL}/theme/${themeId}`;
    let response = await fetch(url);
    let data = await response.json();
    setData({ ...data.data });
  };

  useEffect(() => {
    getData();
  }, []);

  const goBack = () => {
    navigator('/');
  };

  return (
    <Wrapper>
      <BackButton onClick={goBack}>
        <BackToolbar />
      </BackButton>
      <PreviewImage src={data?.imageUrl} alt={data?.name} />
      <ThemeInfo>
        <h1>{data?.name}</h1>
        <div>{data?.creator}</div>
        <FlexRow>
          {data?.hashtag &&
            data?.hashtag.map((keyword: string) => {
              return <Hashtag key={keyword} keyword={keyword} />;
            })}
        </FlexRow>
        <ShareButton>
          <AllShare />
        </ShareButton>
      </ThemeInfo>
      <AdSpace>AD</AdSpace>
      {data?.isLiveTheme && (
        <FlexColumn>
          <FlexRow>
            {data?.figure &&
              data?.figure.map((item: Item) => {
                return (
                  <Figure
                    key={item?.imageUrl}
                    keyword={item?.keyword}
                    imageUrl={item?.imageUrl}
                  />
                );
              })}
          </FlexRow>
          <FiguresQA>
            <p>일부 앱에서는 움짤 형태로 전송되거나,</p>
            <p>멈춰있는 이모티콘으로 전송될 수 있어요.</p>
            <Link to="#">이모티콘은 어떻게 전송하나요?</Link>
          </FiguresQA>
        </FlexColumn>
      )}
      <FlexRow>
        <Reaction emoji="😊" reaction="맘에들어요" count={0} />
        <SelectedReaction emoji="😍" reaction="심쿵했어요" count={1} />
        <Reaction emoji="😉" reaction="응원해요" count={0} />
        <Reaction emoji="🤣" reaction="갖고싶어요" count={0} />
      </FlexRow>
      <FlexColumn>
        <BorderButton>상품 문의</BorderButton>
        <Button>구매 💎7 광고제거 무제한 사용</Button>
      </FlexColumn>
    </Wrapper>
  );
};
export default WebApp;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  width: 100%;
  min-width: 375px;
  min-height: 100vh;
  background-color: ${colors.white};
  overflow-y: scroll;
  overscroll-behavior: contain;

  ::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  ${device.desktop} {
    max-width: 420px;
  }
`;

const BackButton = styled.div`
  margin: 20px 0 0 0;
  padding: 10px;
  width: fit-content;
  cursor: pointer;
`;

const ShareButton = styled.div`
  width: fit-content;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;

const FlexDiv = styled.div`
  display: flex;
`;

const PreviewImage = styled.img`
  width: 100%;
  border-radius: 25px;
`;

const ThemeInfo = styled(FlexDiv)`
  position: relative;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;

const AdSpace = styled.div`
  width: 100%;
  background-color: #d9d9d9;
  text-align: center;
  padding: 20px 0;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

const FlexRow = styled.section`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const FiguresQA = styled(FlexColumn)`
  color: ${colors.subGray};

  > a {
    color: ${colors.bodyGray};
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: 100%;
  height: 46px;
  background-color: ${colors.pink};
  border: 3px solid ${colors.pink};
  border-radius: 50px;
  color: ${colors.white};
  font: inherit;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
`;

const BorderButton = styled(Button)`
  width: 90%;
  height: 40px;
  background-color: ${colors.white};
  border: 3px solid ${colors.pink};
  color: ${colors.pink};
  border-radius: 50px;
`;

const SelectedReaction = styled(Reaction)`
  color: ${colors.pink};
`;
