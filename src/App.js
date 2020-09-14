import React, {Component} from "react"
import {Route, Switch} from "react-router-dom"
import Home from "./pages/Home"
import Rooms from "./pages/Rooms"
import SingleRoom from "./pages/SingleRoom"
import NotFound from "./pages/Error"
import Navbar from "./components/Navbar"
import "./App.css"

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/rooms" component={Rooms} />
          <Route exact path="/rooms/:slug" component={SingleRoom} />
          <Route component={NotFound} />
        </Switch>
      </>
    )
  }
}

export default App
