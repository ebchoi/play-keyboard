import { useEffect, useState } from 'react';

import { colors, device } from '../styles/theme';
import Hashtag from '../components/hashtag.components';
import Figure from '../components/themeFigure.components';
import Reaction from '../components/emojiButton.components';
import Button from '../components/button.components';
import './webapp.css';
import styled from 'styled-components';

function WebApp() {
  // list 페이지에서 detail로 넘어올때 params로 themeId 받아오도록 적용하기
  // let { themeId } = useParams();
  let themeId = 6;
  // themeId = 'OWN_H0-L-39';
  const [themeInfo, setThemeInfo] = useState([]);
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const getThemeInfoById = async () => {
    // let url = `${process.env.REACT_APP_BASE_URL}/theme/${themeId}`;
    let url = `https://api.plkey.app/theme/${themeId}`;
    let response = await fetch(url);
    let data = await response.json();
    setThemeInfo(data.data);
  };

  useEffect(() => {
    getThemeInfoById();
  }, []);

  const increaseMind = () => {
    setCount(count + 1);
    console.log('맘에 들어요');
  };
  const increaseSim = () => {
    setCount1(count1 + 1);
  };
  const increaseCheer = () => {
    setCount2(count2 + 1);
  };
  const increaseWant = () => {
    setCount3(count3 + 1);
  };
  return (
    <Wrapper>
      <PreviewImage src={themeInfo.imageUrl} alt={themeInfo.name} />
      <ThemeInfo>
        <h1>{themeInfo.name}</h1>
        <div>{themeInfo.creator}</div>
        <FlexRow>
          {themeInfo.hashtag &&
            themeInfo?.hashtag.map(keyword => {
              return <Hashtag key={keyword} keyword={keyword} />;
            })}
        </FlexRow>
      </ThemeInfo>
      <AdSpace>AD</AdSpace>
      {themeInfo.isLiveTheme && (
        <FlexColumn>
          <FlexRow>
            {themeInfo.figure &&
              themeInfo?.figure.map(figure => {
                return (
                  <Figure
                    key={figure.imageUrl}
                    keyword={figure.keyword}
                    imageUrl={figure.imageUrl}
                  />
                );
              })}
          </FlexRow>
          <FlexColumn>
            <p>일부 앱에서는 움짤 형태로 전송되거나,</p>
            <p>멈춰있는 이모티콘으로 전송될 수 있어요.</p>
            <div>이모티콘은 어떻게 전송하나요?</div>
          </FlexColumn>
        </FlexColumn>
      )}
      <FlexRow>
        {/* <button className="button" onClick={increaseMind} /> */}
        <div onClick={increaseMind}>
          <Reaction emoji="😉" />
          <span className="center">맘에들어요</span> <br />
          {count}
        </div>
        <div onClick={increaseSim}>
          <Reaction emoji="😍" selected={true} />
          <span className="center">심쿵했어요</span>

          {count1}
        </div>
        <div onClick={increaseCheer}>
          <Reaction emoji="😉" reaction="" />
          <span className="center">응원해요</span>

          {count2}
        </div>
        <div onClick={increaseWant}>
          <Reaction emoji="🤣" reaction="" />
          <span className="center">갖고싶어요 </span>

          {count3}
        </div>
      </FlexRow>
      <FlexColumn>
        <Button
          mode="anchor"
          styledmode="secondary"
          href="https://plkey.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          상품 문의
        </Button>
        <Button mode="button" type="submit" styledmode="primary" fullwidth>
          구매 💎7 광고제거 무제한 사용
        </Button>
      </FlexColumn>
    </Wrapper>
  );
}
export default WebApp;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 16px;
  width: 100%;
  min-width: 375px;
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

const FlexDiv = styled.div`
  display: flex;
`;

const PreviewImage = styled.img`
  width: 100%;
  border-radius: 25px;
`;

const ThemeInfo = styled(FlexDiv)`
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
