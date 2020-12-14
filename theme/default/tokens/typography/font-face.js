import NotoSansLightFont from '../../assets/fonts/NotoSans-Light.base64';
import NotoSansRegularFont from '../../assets/fonts/NotoSans-Regular.base64';
import NotoSansMediumFont from '../../assets/fonts/NotoSans-Medium.base64';
import NotoSansBoldFont from '../../assets/fonts/NotoSans-Bold.base64';
import NotoSansBlackFont from '../../assets/fonts/NotoSans-Black.base64';

const NotoSansLight = {
  fontFamily: 'NotoSans',
  fontStyle: 'normal',
  fontWeight: 300,
  src: `
    local('NotoSans'),
    local('NotoSans-Light')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const NotoSansRegular = {
  fontFamily: 'NotoSans',
  fontStyle: 'normal',
  fontWeight: 400,
  src: `
    local('NotoSans'),
    local('NotoSans-Regular')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const NotoSansMedium = {
  fontFamily: 'NotoSans',
  fontStyle: 'normal',
  fontWeight: 500,
  src: `
    local('NotoSans'),
    local('NotoSans-Medium')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const NotoSansBold = {
  fontFamily: 'NotoSans',
  fontStyle: 'normal',
  fontWeight: 700,
  src: `
    local('NotoSans'),
    local('NotoSans-Bold')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const NotoSansBlack = {
  fontFamily: 'NotoSans',
  fontStyle: 'normal',
  fontWeight: 900,
  src: `
    local('NotoSans'),
    local('NotoSans-Black')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export default [NotoSansLight, NotoSansRegular, NotoSansMedium, NotoSansBold, NotoSansBlack];
