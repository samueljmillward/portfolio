import { createGlobalStyle } from 'styled-components';

import Roboto from './fonts/Roboto.woff';
import Roboto2 from './fonts/Roboto.woff2';

const GlobalStyle = createGlobalStyle`
        html,
        body {
          margin: 0;
          padding: 0;
          height: 100%;
          color: #69a589;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif;
          font-size: 18px;
          line-height: 1.4;
          background: #060a1f;

          strong {
            color: #be8418;
          }

          p {
            max-width: 960px;
            line-height: 1.4;
          }

          h1 {
            display: block;
            color: white;
          }
        }
    
    @font-face {
        font-family: 'Roboto';
        src: local('Roboto'), local('Roboto2'),
        url(${Roboto}) format('woff'),
        url(${Roboto2}) format('woff2');
        font-weight: 300;
        font-style: normal;
    }
`;

export default GlobalStyle;
