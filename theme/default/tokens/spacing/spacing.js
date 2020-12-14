import { htmlFontSize } from '../typography/typography-base';
import { spacingBase } from './spacing-base';

const spacing = (factor) => `${(spacingBase / htmlFontSize) * factor}rem`; // theme.spacing(2); => 8/16 * 2 = 1rem = 16px

export default spacing;
