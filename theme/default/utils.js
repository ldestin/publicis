import { createMuiTheme } from '@material-ui/core/styles';
import { htmlFontSize } from './tokens/typography/typography-base';

const theme = createMuiTheme({
  typography: {
    htmlFontSize: htmlFontSize,
  },
});

export const {
  typography: { pxToRem },
} = theme;

export const {
  palette: { augmentColor },
} = theme;

export const remMapper = (CSSProperty) => {
  const mappedCSSProperty = Object.assign({}, CSSProperty);
  Object.keys(mappedCSSProperty).map((key) => {
    mappedCSSProperty[key] = pxToRem(mappedCSSProperty[key]);
  });
  return mappedCSSProperty;
};
