import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    paddingTop: theme.spacing(4),
    [theme.breakpoints.up('lg')]: {
      minHeight: '580px',
      paddingTop: theme.spacing(10),
    },
    backgroundColor: theme.palette.background.paper,
  },
  accountButtonLink: {
    fontWeight: '900',
    display: 'inline-flex',
  },
  footer: {
    padding: '20px',
    margin: 'auto',
    textAlign: 'center',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  divider: {
    paddingTop: theme.spacing(3)
  }
}));
