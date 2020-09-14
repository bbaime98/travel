import React, {Component} from "react"
import {BrowserRouter as Router} from "react-router-dom"
import {Route, Switch, Redirect} from "react-router"
import CssBaseline from "@material-ui/core/CssBaseline"
import {MuiThemeProvider} from "@material-ui/core/styles"
import theme from "./theme"
import Login from "./components/Login"
import Create from "./components/Create"
import Booking from "./components/Booking"
import Dashboard from "./components/Dashboard"
import Form from "./components/form"
import {GlobalProvider} from "./context/GlobalState"

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalProvider>
          <Router>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/p" component={Create} />
              <Route exact path="/book" component={Booking} />
              <Route exact path="/d" component={Dashboard} />
              <Route exact path="/f" component={Form} />
            </Switch>
          </Router>
        </GlobalProvider>
      </MuiThemeProvider>
    )
  }
}

export default App
