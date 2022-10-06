import styled, { css } from 'styled-components';
import { device } from '../styles/theme';
import { ReactComponent as StoreUncolor } from '../images/storeuncolor.svg';
import { ReactComponent as ChargerUncolor } from '../images/chargeruncolor.svg';
import { ReactComponent as SettingUncolor } from '../images/settinguncolor.svg';
import { ReactComponent as MyThemeColor } from '../images/mythemecolor.svg';

const NavBar: React.FC = () => {
  return (
    <PageNaviator>
      <NavContainer>
        <MainContentsPage>
          <StoreUncolor />
        </MainContentsPage>
        <MainContentPageSpan>스토어</MainContentPageSpan>
      </NavContainer>

      <NavContainer>
        <MainContentsPage>
          <ChargerUncolor />
        </MainContentsPage>
        <MainContentPageSpan>충전소</MainContentPageSpan>
      </NavContainer>

      <NavContainer>
        <MainContentsPage>
          <MyThemeColor />
        </MainContentsPage>
        <MainContentPageSpan>MY테마</MainContentPageSpan>
      </NavContainer>

      <NavContainer>
        <MainContentsPage>
          <SettingUncolor />
        </MainContentsPage>
        <MainContentPageSpan>설정</MainContentPageSpan>
      </NavContainer>
    </PageNaviator>
  );
};

export default NavBar;

const PageNaviator = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  justify-content: space-between;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;

  ${device.tablet} {
    justify-content: space-evenly;
  }
`;

const NavContainer = styled.div`
  width: 93px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const MainContentsPage = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  align-items: center;
`;

const MainContentPageSpan = styled.div<{
  isStore?: boolean;
  isCharger?: boolean;
  isMyTheme?: boolean;
  isSetting?: boolean;
}>`
  font-family: 'Noto Sans KR';
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  margin: 0 auto;
  ${props =>
    props.isStore === true &&
    css`
      color: #ff417d;
    `}
  ${props =>
    props.isCharger === true &&
    css`
      color: #ff417d;
    `}
  ${props =>
    props.isMyTheme === true &&
    css`
      color: #ff417d;
    `}
  ${props =>
    props.isSetting === true &&
    css`
      color: #ff417d;
    `}
`;
