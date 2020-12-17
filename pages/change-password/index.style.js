import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    rules: {
      fontSize: theme.typography.fontSize.s
    },
  }),
);
