import { createMuiTheme, Theme } from '@material-ui/core/styles';
import palette from './tokens/palette/palette';
import breakpoints from './tokens/breakpoint/breakpoint';
import typography from './tokens/typography/typography';
import spacing from './tokens/spacing/spacing';
import overrides from './overrides';

// TODO: Move type declaration to index.d.ts and export types for apps.
import { PaletteColor, PaletteColorOptions } from '@material-ui/core/styles/createPalette';

export const theme = createMuiTheme({
  name: 'default',
  palette,
  breakpoints,
  typography,
  spacing,
  overrides,
});
