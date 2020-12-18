import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3)

  },
  border: {
    borderBottom: "2px solid #E0E0E0",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: theme.typography.caption.fontSize,
    color: `${theme.palette.grey[400]}`
  }
}));

export const DividerWithText = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}  >
      <div className={classes.border} />
      <span className={classes.content}>{children}</span>
      <div className={classes.border} />
    </div>
  );
};

export default DividerWithText;
