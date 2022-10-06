import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/navbar.components';

const Setting: React.FC = () => {
  return (
    <SettingContainer>
      설정페이지
      <MainNavigation>
        <NavBar serviceType="SETTING" />
      </MainNavigation>
    </SettingContainer>
  );
};

export default Setting;

const SettingContainer = styled.div`
  width: 373px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  font-size: 100px;
  font-weight: bold;
  font-size: 100px;
  font-weight: bold;
`;

const MainNavigation = styled.div`
  position: fixed;
  display: flex;
  bottom: 0px;
  z-index: 100;
`;
