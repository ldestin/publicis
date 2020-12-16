import { makeStyles, createStyles } from '@material-ui/core/styles';
import { getCustomStyles } from './button.customStyle';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    ...getCustomStyles(theme),
  }),
);
