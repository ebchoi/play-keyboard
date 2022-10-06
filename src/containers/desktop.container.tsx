import { colors, device } from '../styles/theme';
import Button from '../components/button.components';
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
            <StyledButton mode="anchor">App Store</StyledButton>
            <StyledButton mode="anchor">Play Store</StyledButton>
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

const StyledButton = styled(Button)`
  padding: 10px 20px;
  height: auto;
  background-color: ${colors.white};
  font-size: 20px;
  text-align: left;
`;
