import {theme} from '@styles'

const fonts = `
  /* 300 */

  @font-face {
    font-family: ${theme.fonts.name};
    src: url('/fonts/gt-walsheim/gt-walsheim-light.ttf')
      format('opentype');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }

  /* 400 */

  @font-face {
    font-family: ${theme.fonts.name};
    src: url('/fonts/gt-walsheim/gt-walsheim-medium.ttf')
      format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* 500 */

  @font-face {
    font-family: ${theme.fonts.name};
    src: url('/fonts/gt-walsheim/gt-walsheim-regular.ttf')
      format('opentype');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  /* 700 */

  @font-face {
    font-family: ${theme.fonts.name};
    src: url('/fonts/gt-walsheim/gt-walsheim-bold.ttf') format('opentype');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
`;

export default fonts;
