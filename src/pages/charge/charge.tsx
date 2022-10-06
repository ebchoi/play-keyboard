import React from 'react';
import styled from 'styled-components';
import NavBar from '../../components/navbar.components';

const Charge: React.FC = () => {
  return (
    <ChargeContainer>
      충전소 페이지
      <MainNavigation>
        <NavBar serviceType="CHARGE" />
      </MainNavigation>
    </ChargeContainer>
  );
};

export default Charge;

const ChargeContainer = styled.div`
  width: 373px;
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  font-size: 100px;
  font-weight: bold;
  border: 1px solid black;
  font-size: 100px;
  font-weight: bold;
`;

const MainNavigation = styled.div`
  width: 100%;
  position: fixed;
  display: flex;
  bottom: 0px;
  margin-left: 80px;
  /* justify-content: center; */
`;
