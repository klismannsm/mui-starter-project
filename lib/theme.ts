import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: '#a3e3b0',
      contrastText: '#3d3d3d',
    },
    secondary: {
      main: '#19857b',
      contrastText: '#3d3d3d',
    },
    error: {
      main: red.A400,
      contrastText: '#3d3d3d',
    },
    background: {
      default: '#f0f0f0',
    },
  },
})

export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#6dad7a',
      contrastText: '#ededed',
    },
    secondary: {
      main: '#19857b',
      contrastText: '#ededed',
    },
    error: {
      main: red.A400,
      contrastText: '#ededed',
    },
    background: {
      default: '#636363',
    },
  },
})
