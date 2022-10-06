import React, { useState } from 'react';
import styled from 'styled-components';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Array<string>>([
    'LIVE',
    '일러스트',
    '기념일',
    '아라찌',
    '밀당해피니스',
    '이미지',
  ]);
  return <CategoriesContainer>{categories.map((item) => item}</CategoriesContainer>;
};

export default Categories;

const CategoriesContainer = styled.div`
  width: 100%;
  height: 48px;
`;
