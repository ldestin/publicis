import { fade } from '@material-ui/core/styles/colorManipulator';

/* Returns all the custom styles to support new theme elements e.g - teritary palette, */
export const getCustomStyles = (theme) => {
  const customStyles = {};

  /* Custom styles for 'Tertiary' palette */
  const { tertiary, action } = theme.palette;
  if (tertiary) {
    Object.assign(customStyles, {
      textTertiary: {
        color: tertiary.main,
        '&:hover': {
          backgroundColor: fade(tertiary.main, action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      outlinedTertiary: {
        color: tertiary.main,
        border: `1px solid ${fade(tertiary.main, 0.5)}`,
        '&:hover': {
          border: `1px solid ${tertiary.main}`,
          backgroundColor: fade(tertiary.main, action.hoverOpacity),
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: 'transparent',
          },
        },
      },
      containedTertiary: {
        color: tertiary.contrastText,
        backgroundColor: tertiary.main,
        '&:hover': {
          backgroundColor: tertiary.dark,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            backgroundColor: tertiary.main,
          },
        },
      },
    });
  }

  /* Custom styles for other theme elements */
  /* ... */

  return customStyles;
};
