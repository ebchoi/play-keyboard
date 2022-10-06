import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { colors } from '../styles/theme';

function Button({ mode, to, fullwidth, children, ...restProps }) {
  const Component = modeComponent[mode];
  return (
    <Component fullwidth={fullwidth ? 1 : 0} {...restProps}>
      {children}
    </Component>
  );
}

export default Button;

const modeStyle = {
  primary: {
    height: '46px',
    color: colors.white,
    'background-color': colors.pink,
    border: `3px solid ${colors.pink}`,
    'border-radius': '30px',
  },
  secondary: {
    height: '40px',
    color: colors.pink,
    'background-color': colors.white,
    border: `3px solid ${colors.pink}`,
    'border-radius': '20px',
  },
};

const componentDesign = css`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  width: ${({ fullwidth }) => (fullwidth ? '100%' : '90%')};
  ${({ styledmode }) => modeStyle[styledmode]};
  font: inherit;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
`;

const StyledButton = styled.button`
  ${componentDesign}
`;

const StyledAnchor = styled.a`
  ${componentDesign}
`;

const StyledLinkA = styled(Link)`
  ${componentDesign}
`;

const modeComponent = {
  button: StyledButton,
  link: StyledLinkA,
  anchor: StyledAnchor,
};
