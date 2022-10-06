export const colors = {
  background: '#E5E5E5',
  white: '#FFFFFF',
  black: '#000000',
  pink: '#FF417D',
  gray: '#D9D9D9',
  fontGray: '#505050',
  subGray: '#919299',
  bodyGray: '#4B4E57',
};

const deviceSizes = {
  mobile: '375px',
  tablet: '768px',
  desktop: '1024px',
};

export const device = {
  mobile: `@media only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `@media only screen and (min-width: ${deviceSizes.tablet}) and (max-width: ${deviceSizes.desktop})`,
  desktop: `@media only screen and (min-width: ${deviceSizes.desktop})`,
};
