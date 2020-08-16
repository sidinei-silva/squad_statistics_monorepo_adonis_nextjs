import { makeStyles, createStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    root: {
      background: 'blue',
    },
    content_page: {
      minHeight: '100vh',
      padding: '0 0.5rem',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    paper_form: {
      backgroundColor: '#c3cfda',
    },
    fieldTextInputs: {
      backgroundColor: theme.palette.background.default,
    },
    submitButton: {
      color: theme.palette.success.contrastText,
      backgroundColor: theme.palette.success.main,
      '&:hover, &:focus': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
      },
    },
    labelRoot: {
      fontWeight: 600,
      color: '#4b5b6a',
    },
  })
);
