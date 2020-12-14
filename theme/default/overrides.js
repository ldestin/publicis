import fontFaces from './tokens/typography/font-face';

export default {
  MuiCssBaseline: {
    '@global': {
      '@font-face': fontFaces,
    },
  },
};
