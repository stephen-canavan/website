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

          background-color: ${theme.colors.greyGreen[4]};
          color: ${theme.colors.grey[0]};

          -webkit-font-smoothing: antialiased;

          font-family: ${theme.fonts.main};
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
