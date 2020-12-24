import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 0,
      width: '100%',
      height: theme.spacing(9),
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.07)',
      [theme.breakpoints.up('sm')]: {
        paddingRight: theme.spacing(4),
      },
    },
    arrow: {
      marginBottom: theme.spacing(0.5),
    },
    backButton: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      height: theme.spacing(9),
      width: theme.spacing(9),
      fontSize: theme.typography.fontSizes.xxxs,
      color: 'rgba(0, 0, 0, 0.38)',
      textTransform: 'uppercase',
      borderRight: '1px solid #E0E0E0',
    },
    logo: {
      cursor: 'pointer',
    },
    contact: {
      display: 'flex',
      flexDirection: 'column-reverse',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: theme.typography.fontSizes.xxxs,
      fontWeight: 500,
      letterSpacing: '0.15px',
      color: 'rgba(0, 0, 0, 0.54)',
      height: '100%',
      padding: '0 12px',
      borderLeft: '1px solid #E0E0E0',
      textTransform: 'uppercase',
      [theme.breakpoints.up('sm')]: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        justifyContent: 'unset',
        height: 'auto',
        padding: 0,
        borderLeft: 0,
        fontSize: theme.typography.fontSizes.m,
        textTransform: 'none',
      },
    },
    number: {
      display: 'none',
      fontWeight: 900,
      [theme.breakpoints.up('sm')]: {
        display: 'unset',
      },
    },
    phoneIcon: {
      display: 'inline',
      marginBottom: theme.spacing(0.5),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
        marginBottom: 'unset',
      },
    },
  }),
);
