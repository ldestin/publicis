import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    footer: {
      width: '100%',
      fontSize: theme.typography.fontSize.xs,
      color: 'rgba(0, 0, 0, 0.54)',
    },
    footerContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      width: '100%',
      padding: theme.spacing(2),
      minHeight: '80px',
      borderTop: '0.5px solid #E0E0E0',
      [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(2, 5),
      },
      [theme.breakpoints.up('md')]: {
        flexDirection: 'unset',
        justifyContent: 'space-between',
      },
    },
    links: {
      display: 'flex',
    },
    link: {
      '&:not(:first-child)': {
        marginLeft: '16px',
      }
    },
    copyright: {
      marginBottom: theme.spacing(1),
      marginRight: 0,
      [theme.breakpoints.up('sm')]: {
        marginBottom: 0,
        marginRight: '16px',
      },
    },
    juridic: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginBottom: theme.spacing(3),
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
        flexDirection: 'unset',
        justifyContent: 'space-between',
      },
    },
    socials: {
      opacity: 0.54,
      '& a:not(:first-child)': {
        marginLeft: '16px',
      },
    },
  }),
);
