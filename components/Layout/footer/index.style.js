import { makeStyles, createStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      '& ul': {
        margin: 0,
        padding: 0,
        listStyleType: 'none',
      },
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingRight: theme.spacing(4),
      width: '100%',
      height: theme.spacing(9),
      boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.07)',
    },
    arrow: {

    },
    backButton: {

    },
    logo: {

    },
    contact: {

    },
    number: {

    },
    phoneIcon: {

    }
  }),
);
