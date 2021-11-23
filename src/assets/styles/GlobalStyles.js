import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

    @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Titillium+Web:wght@400;600;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    body {
        font-family: 'Roboto', sans-serif !important;
    }
`;
