import React, { useState } from 'react';
import styled from 'styled-components';

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Array<string>>([
    'LIVE',
    '일러스트',
    '기념일',
    '아라찌',
    '',
  ]);
  return <CategoriesContainer />;
};

export default Categories;

const CategoriesContainer = styled.div`
  width: 100%;
  height: 48px;
`;
