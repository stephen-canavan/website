import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider as StyleThemeProvider } from 'emotion-theming';

import { theme } from '@styles';

const StyleProvider = ({ children }) => {
  return <StyleThemeProvider theme={theme}>{children}</StyleThemeProvider>;
};

StyleProvider.defaultProps = {
  children: 'There is no content for this page',
};

StyleProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StyleProvider;