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
      `}
    />
  );
};

export default GlobalStyles;
