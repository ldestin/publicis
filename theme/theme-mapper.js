import { theme as defaultTheme } from './default';

export const themes = {
  default: defaultTheme,
};

export const getThemeByBrand = (brand) => {
  let theme = 'default';
  if (brand) {
    theme = Object.keys(themes).find((theme) => brand.match(theme)) || theme;
  }
  return themes[theme];
};
