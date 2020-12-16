import React from 'react';
import clsx from 'clsx';
import MUIButton from '@material-ui/core/Button';
import { useStyles } from './button.styles';

export const Button = ({ variant = 'text', color = 'primary', children, ...props }) => {
  const classes = useStyles();

  return (
    <MUIButton
      {...props}
      variant={variant}
      color={color === 'tertiary' ? 'primary' : color}
      className={clsx(classes.root, {
        [classes[`${variant}Tertiary`]]: color === 'tertiary',
      })}
    >
      {children}
    </MUIButton>
  );
};

export default Button;
