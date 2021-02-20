import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Nav from "./components/Nav"

import Home from "./views/Home"
import About from "./views/About"
import Chat from "./views/Chat"
import NotFound from "./views/NotFound"

function App() {
  return (
    <Router>
      <Nav />
       <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/chat">
          <Chat />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </Router>

  )
}

export default App
