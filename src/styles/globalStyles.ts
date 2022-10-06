import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
${reset}
*{
    box-sizing: border-box;
}
    
body{
    font-style : normal;
    font-family: 'Noto Sans KR', sans-serif;
}
    input:focus {
        outline : none;
    }
    button {
        cursor : pointer;
    }
    a {
        color: inherit;
    }
    .no-drag {-ms-user-select: none; -moz-user-select: -moz-none; -webkit-user-select: none; -khtml-user-select: none; user-select:none;};
`;

export default GlobalStyles;
