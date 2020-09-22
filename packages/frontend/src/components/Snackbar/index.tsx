import { IconButton, withStyles } from '@material-ui/core';
import { Close as CloseIcon } from '@material-ui/icons';
import { SnackbarProvider, SnackbarProviderProps } from 'notistack';
import React from 'react';

import useStyles from './styles';

const Snackbar: any = (props: SnackbarProviderProps) => {
  const { children } = props;
  const classes = useStyles();
  const notistackRef: any = React.createRef();

  const onClickDismiss = (key) => () => {
    notistackRef.current.closeSnackbar(key);
  };

  return (
    <SnackbarProvider
      ref={notistackRef}
      maxSnack={5}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'center',
      }}
      action={(key) => (
        <IconButton onClick={onClickDismiss(key)}>
          <CloseIcon className={classes.closeActionButton} />
        </IconButton>
      )}
    >
      {children}
    </SnackbarProvider>
  );
};

export default Snackbar;
