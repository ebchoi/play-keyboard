import React from 'react';
import styled from 'styled-components';

const Categories: React.FC = () => {
  return (
    <CategoriesContainer>
      <Content>LIVE</Content>
      <Content>일러스트</Content>
      <Content>기념일</Content>
      <Content>아라찌</Content>
      <Content>밀당해피니스</Content>
      <Content>이미지</Content>
    </CategoriesContainer>
  );
};

export default Categories;

const CategoriesContainer = styled.ul`
  display: flex;
`;

const Content = styled.li`
  display: flex;
  height: 48px;
  margin-right: 16px;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  cursor: pointer;

  :first-child {
    margin-left: 16px;
    color: #ff417d;
    border-bottom: 2px solid #ff417d;
  }
`;
