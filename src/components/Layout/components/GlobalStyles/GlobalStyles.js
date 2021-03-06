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

          color: ${theme.colors.greyGreen[4]}
          background: rgb(73,102,96);
          background: radial-gradient(circle, rgba(73,102,96,1) 0%, rgba(52,58,64,1) 54%, rgba(23,24,24,1) 100%);

          -webkit-font-smoothing: antialiased;

          font-family: ${theme.fonts.main};
          font-weight: 300;
          height: 100%;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .rapper {
          padding-top: 30px;
          background: rgb(255,255,255);
          background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(230,230,230,1) 100%);
          min-height: 1000px;
          
        }

        .dropdown-menu{
          background-color: ${theme.colors.grey[0]};
        }
      `}
    />
  );
};

export default GlobalStyles;
