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
          src: url("@fonts/GTWalsheim/GTWalsheimPro-Light.ttf")   format("ttf");
          font-weight: 300;
        }

        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url("@fonts/GTWalsheim/GTWalsheimPro-Medium.ttf")   format("ttf");
          font-weight: 400;
        } 

        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url("@fonts/GTWalsheim/GTWalsheimPro-Regualar.ttf")   format("ttf");
          font-weight: 500;
        }
        
        @font-face {
          font-family: 'GT Walsheim Pro';
          src: url("@fonts/GTWalsheim/GTWalsheimPro-Bold.ttf")   format("ttf");
          font-weight: 700;
        } 
      `}
    />
  );
};

export default GlobalStyles;
