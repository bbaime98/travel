import React, {Component} from "react"
import {Route} from "react-router-dom"
import CssBaseline from "@material-ui/core/CssBaseline"
import {MuiThemeProvider} from "@material-ui/core/styles"
import theme from "./theme"
import Login from "./components/Login"
import Paper from "./components/form"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Route exact path="/" component={Login} />
        <Route exact path="/p" component={Paper} />
      </MuiThemeProvider>
    )
  }
}

export default App
