import React from 'react';
import { Global, css } from '@emotion/core';

import { theme } from '@styles';

const GlobalStyles = () => {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
        }

        body {
          margin: 0;

          background-color: ${theme.colors.greyGreen[3]};
          color: ${theme.colors.greyGreen[0]};

          -webkit-font-smoothing: antialiased;

          font-family: 'GT Walsheim Pro';
          font-weight: 300;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('@fonts/GTWalsheimPro-Bold.eot');
          src: url('@fonts/GTWalsheimPro-Bold.eot?#iefix') format('embedded-opentype'),
              url('@fonts/GTWalsheimPro-Bold.woff2') format('woff2'),
              url('@fonts/GTWalsheimPro-Bold.woff') format('woff'),
              url('@fonts/GTWalsheimPro-Bold.ttf') format('truetype'),
              url('@fonts/GTWalsheimPro-Bold.svg#GTWalsheimPro-Bold') format('svg');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('@fonts/GTWalsheimPro-Light.eot');
          src: url('@fonts/GTWalsheimPro-Light.eot?#iefix') format('embedded-opentype'),
              url('@fonts/GTWalsheimPro-Light.woff2') format('woff2'),
              url('@fonts/GTWalsheimPro-Light.woff') format('woff'),
              url('@fonts/GTWalsheimPro-Light.ttf') format('truetype'),
              url('@fonts/GTWalsheimPro-Light.svg#GTWalsheimPro-Light') format('svg');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('@fonts/GTWalsheimPro-Regular.eot');
          src: url('@fonts/GTWalsheimPro-Regular.eot?#iefix') format('embedded-opentype'),
              url('@fonts/GTWalsheimPro-Regular.woff2') format('woff2'),
              url('@fonts/GTWalsheimPro-Regular.woff') format('woff'),
              url('@fonts/GTWalsheimPro-Regular.ttf') format('truetype'),
              url('@fonts/GTWalsheimPro-Regular.svg#GTWalsheimPro-Regular') format('svg');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'GT Walsheim Pro';
          src: url('@fonts/GTWalsheimPro-Medium.eot');
          src: url('@fonts/GTWalsheimPro-Medium.eot?#iefix') format('embedded-opentype'),
              url('@fonts/GTWalsheimPro-Medium.woff2') format('woff2'),
              url('@fonts/GTWalsheimPro-Medium.woff') format('woff'),
              url('@fonts/GTWalsheimPro-Medium.ttf') format('truetype'),
              url('@fonts/GTWalsheimPro-Medium.svg#GTWalsheimPro-Medium') format('svg');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
      }
      
      
      `}
    />
  );
};

export default GlobalStyles;
