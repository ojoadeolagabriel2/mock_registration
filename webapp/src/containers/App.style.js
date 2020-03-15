import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 10;
        padding: 10;
        font-family:Helvetica, Arial, sans-serif;
    }

    *,
    ::before,
    ::after {
        box-sizing: inherit;
    }
`;
