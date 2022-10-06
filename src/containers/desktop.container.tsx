import { colors, device } from '../styles/theme';
// import Button from '../components/button.components';
import styled from 'styled-components';

interface DesktopProps {
  children: JSX.Element | JSX.Element[];
}

const Desktop: React.FC<DesktopProps> = ({ children }) => {
  return (
    <Container>
      <Inner>
        <AppInfo>
          <BrandHeader>
            <span>플레이키보드</span> 웹스토어
          </BrandHeader>
          <p>생동감 넘치는 소통의 시작</p>
          <FlexRow>
            <StyledButton>App Store</StyledButton>
            <StyledButton>Play Store</StyledButton>
          </FlexRow>
        </AppInfo>
        {children}
      </Inner>
    </Container>
  );
};
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

const BrandHeader = styled.h1`
  > span {
    color: ${colors.pink};
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

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  width: 100%;
  height: 46px;
  background-color: ${colors.bodyGray};
  border: 3px solid ${colors.bodyGray};
  border-radius: 50px;
  color: ${colors.white};
  font: inherit;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  box-sizing: border-box;
  height: auto;
  font-size: 20px;
  text-align: left;
`;
