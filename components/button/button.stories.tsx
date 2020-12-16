import React from 'react';
import { Button } from './button';
import { makeStyles } from '@material-ui/core/styles';
import { text, select, boolean } from '@storybook/addon-knobs';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import SaveIcon from '@material-ui/icons/Save';
import SendIcon from '@material-ui/icons/Send';
import { ThemeProvider } from '@spark/themes';

export default {
  title: 'Components|Button',
  component: Button,
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  story: {
    display: 'flex',
    padding: 50,
  },
}));
const buttonVariant = ['contained', 'outlined', 'text'];
const themeColor = ['primary', 'secondary', 'tertiary'];

export const Default = () => {
  const classes = useStyles();
  const copy = text('Text', 'Action');
  const variant = select('Variant', buttonVariant, 'contained');
  const color = select('Color', themeColor, 'primary');
  const disabled = boolean('Disable', false);
  const fullWidth = boolean('Full Width', false);

  const story = (
    <ThemeProvider>
      <Button variant={variant} color={color} disabled={disabled} fullWidth={fullWidth}>
        {copy}
      </Button>
    </ThemeProvider>
  );
  return <div className={classes.story}>{story}</div>;
};

export const Contained = () => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="tertiary">
          Tertiary
        </Button>
        <Button variant="contained" color="tertiary" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="tertiary" href="https://www.sonepar.fr">
          Link
        </Button>
      </div>
    </ThemeProvider>
  );
};

export const Text = () => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="tertiary">Tertiary</Button>
        <Button color="tertiary" disabled>
          Disabled
        </Button>
        <Button href="https://www.sonepar.fr" color="tertiary">
          Link
        </Button>
      </div>
    </ThemeProvider>
  );
};

export const Outlined = () => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" color="tertiary">
          Tertiary
        </Button>
        <Button variant="outlined" color="tertiary" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="tertiary" href="https://www.sonepar.fr">
          Link
        </Button>
      </div>
    </ThemeProvider>
  );
};

export const WithIcons = () => {
  const classes = useStyles();

  return (
    <ThemeProvider>
      <div className={classes.root}>
        <Button variant="contained" color="primary" className={classes.button} endIcon={<SendIcon />}>
          Send
        </Button>
        <Button variant="contained" color="secondary" className={classes.button} startIcon={<DeleteIcon />}>
          Delete
        </Button>
        <Button variant="contained" color="tertiary" className={classes.button} startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
        <Button variant="contained" disabled color="tertiary" className={classes.button} startIcon={<KeyboardVoiceIcon />}>
          Talk
        </Button>
        <Button variant="contained" color="tertiary" size="small" className={classes.button} startIcon={<SaveIcon />}>
          Save
        </Button>
        <Button variant="contained" color="tertiary" size="large" className={classes.button} startIcon={<SaveIcon />}>
          Save
        </Button>
      </div>
    </ThemeProvider>
  );
};
