import { augmentColor } from '../../utils';

const palette = {
  primary: {
    light: '#64B6F7',
    main: '#2196F3',
    dark: '#0B79D0',
    contrastText: '#FFFFFF',
  },
  secondary: {
    light: '#E91E63',
    main: '#BE134D',
    dark: '#F06191',
    contrastText: '#FFFFFF',
  },
  tertiary: {
    light: '#5885F9',
    main: '#1E5BF6',
    dark: '#083CBF',
    contrastText: '#FFFFFF',
  },
  error: {
    light: '#F88078',
    main: '#F44336',
    dark: '#E31B0C',
    contrastText: '#FFFFFF',
  },
  warning: {
    light: '#FFB547',
    main: '#FF9800',
    dark: '#C77700',
    contrastText: 'rgba(0, 0, 0, 0.87)',
  },
  info: {
    light: '#64B6F7',
    main: '#2196F3',
    dark: '#0B79D0',
    contrastText: '#FFFFFF',
  },
  success: {
    light: '#7BC67E',
    main: '#4CAF50',
    dark: '#3B873E',
    contrastText: '#FFFFFF',
  },
  promo: {
    main: '#DF3F29',
  },
};

// TODO: Check if augmentColor Paletter is needed
// This is a step that Material-UI automatically does for the standard palette colors.
palette.tertiary = augmentColor(palette.tertiary);
palette.promo = augmentColor(palette.promo);

export default palette;
