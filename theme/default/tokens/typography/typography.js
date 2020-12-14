import { remMapper } from '../../utils';
import { htmlFontSize, fontFamily, fontSizes, fontWeights, lineHeights, letterSpacings } from './typography-base';

const fontSizesInRems = remMapper(fontSizes);
const lineHeightsInRems = remMapper(lineHeights);
const letterSpacingsInRems = remMapper(letterSpacings);

const typography = {
  htmlFontSize: htmlFontSize,
  fontFamily: fontFamily.join(','),
  fontSize: fontSizes.s,
  fontWeightLight: fontWeights.light,
  fontWeightRegular: fontWeights.regular,
  fontWeightMedium: fontWeights.medium,
  fontWeightBold: fontWeights.bold,
  fontWeightBlack: fontWeights.black,
  fontSizes: remMapper(fontSizes),
  lineHeights: remMapper(lineHeights),
  letterSpacings: remMapper(letterSpacings),
  h1: {
    fontWeight: fontWeights.black,
    fontSize: fontSizesInRems.xxxxl,
    lineHeight: lineHeightsInRems.xxxxl,
    letterSpacing: letterSpacingsInRems.xs,
  },
  h2: {
    fontWeight: fontWeights.black,
    fontSize: fontSizesInRems.xxxl,
    lineHeight: lineHeightsInRems.xxxl,
    letterSpacing: letterSpacingsInRems.s,
  },
  h3: {
    fontWeight: fontWeights.medium,
    fontSize: fontSizesInRems.xxl,
    lineHeight: lineHeightsInRems.xxl,
    letterSpacing: letterSpacingsInRems.m,
  },
  h4: {
    fontWeight: fontWeights.medium,
    fontSize: fontSizesInRems.xl,
    lineHeight: lineHeightsInRems.xl,
    letterSpacing: letterSpacingsInRems.xxl,
  },
  h5: {
    fontWeight: fontWeights.black,
    fontSize: fontSizesInRems.l,
    lineHeight: lineHeightsInRems.l,
    letterSpacing: letterSpacingsInRems.m,
  },
  h6: {
    fontWeight: fontWeights.black,
    fontSize: fontSizesInRems.m,
    lineHeight: lineHeightsInRems.m,
    letterSpacing: letterSpacingsInRems.xl,
  },
  subtitle1: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizesInRems.m,
    lineHeight: lineHeightsInRems.l,
    letterSpacing: letterSpacingsInRems.xl,
  },
  subtitle2: {
    fontWeight: fontWeights.medium,
    fontSize: fontSizesInRems.s,
    lineHeight: lineHeightsInRems.m,
    letterSpacing: letterSpacingsInRems.l,
  },
  body1: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizesInRems.m,
    lineHeight: lineHeightsInRems.m,
    letterSpacing: letterSpacingsInRems.xl,
  },
  body2: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizesInRems.s,
    lineHeight: lineHeightsInRems.m,
    letterSpacing: letterSpacingsInRems.xl,
  },
  button: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizesInRems.s,
    lineHeight: lineHeightsInRems.s,
    letterSpacing: letterSpacingsInRems.xxxl,
  },
  caption: {
    fontWeight: fontWeights.regular,
    fontSize: fontSizesInRems.xs,
    lineHeight: lineHeightsInRems.s,
    letterSpacing: letterSpacingsInRems.xxxl,
  },
};

export default typography;
