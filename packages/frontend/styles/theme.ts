/* eslint-disable camelcase */
import { red } from '@material-ui/core/colors'
import { createMuiTheme, ThemeOptions } from '@material-ui/core/styles'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    },
    success: {
      main: '#1aae9e',
      contrastText: '#fff'
    },
    background: {
      default: '#f7f9fa'
    }
  }
})

export default theme
