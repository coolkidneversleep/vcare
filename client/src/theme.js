import { createTheme } from '@material-ui/core/styles'
const theme = createTheme({
  palette: {
    primary: {
        light: '#fff',
        main: '#FF9E00',
        dark: '#3F8EFC',
        contrastText: '#321ECB',
    },
    neutral: {
        light: '#FFC15C',
        main: '#AAABAD',
        dark: '#FF6D00',
        contrastText: '#fff',
      },
    secondary: {
        main: '#3D352F',
        light: '#fff',
        dark: 'AAABAD'
    },
    typography: {
        main: '#3D352F',
        button: {
          fontSize: '1rem',
        },
    },
  },
})
export default theme