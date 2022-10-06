import { colors, device } from '../styles/theme';
import Button from '../components/button.components';
import styled from 'styled-components';

function Desktop({ children }) {
  return (
    <Container>
      <Inner>
        <AppInfo>
          <h1>플레이키보드 웹스토어</h1>
          <p>생동감 넘치는 소통의 시작</p>
          <FlexRow>
            <StyledButton
              mode="anchor"
              styledmode="secondary"
              href="https://apps.apple.com/kr/app/playkeyboard-tons-of-themes/id1552856161?l=kr"
              target="_blank"
              rel="noopener noreferrer"
            >
              App Store
            </StyledButton>
            <StyledButton
              mode="anchor"
              styledmode="secondary"
              href="https://play.google.com/store/apps/details?id=kr.bitbyte.playkeyboard"
              target="_blank"
              rel="noopener noreferrer"
            >
              Play Store
            </StyledButton>
          </FlexRow>
        </AppInfo>
        {children}
      </Inner>
    </Container>
  );
}
export default Desktop;

const Container = styled.div`
  ${device.desktop} {
    width: 100%;
    height: 100vh;
    background-color: #eff4f8;
    overflow: hidden;
  }
`;

const Inner = styled.div`
  ${device.desktop} {
    margin: 0 auto;
    width: 80%;
    display: flex;
    height: 100vh;
    max-width: 1200px;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
  }
  overflow-y: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  & {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

const FlexRow = styled.div`
  display: flex;
  gap: 25px;
  margin: 35px 0;
`;

const AppInfo = styled.div`
  display: none;

  ${device.desktop} {
    display: block;
    display: flex;
    flex-direction: column;
    padding: 150px 0;
    height: 100vh;
    color: ${colors.fontGray};
    font-size: 50px;
    position: sticky;
    top: 0;
    overflow: hidden;
  }
`;

const StyledButton = styled(Button)`
  padding: 10px 20px;
  height: auto;
  background-color: ${colors.white};
  font-size: 20px;
  text-align: left;
`;
