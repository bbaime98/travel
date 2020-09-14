import {createMuiTheme} from "@material-ui/core/styles"

const AppTheme = createMuiTheme({
  palette: {
    primary: {
      // main: "#081C15",
      // main: "#2D6A4F",
      // main: "#16db93",
      // main: "#004e89",
      main: "#023047",
    },
    secondary: {
      main: "#BFD200",
      // main: "#011627",
    },
    red: {
      main: "#ff0000",
    },
  },
  typography: {
    fontFamily: ["Avenir", "medium", "Arial", "sans-serif"].join(","),
    useNextVariants: true,
  },
})

export default AppTheme
