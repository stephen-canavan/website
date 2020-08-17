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
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .rapper {
          padding: 50px;
        }

        .dropdown-menu{
          background-color: ${theme.colors.grey[0]};
        }
      `}
    />
  );
};

export default GlobalStyles;
