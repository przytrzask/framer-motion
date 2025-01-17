import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import "./index.css"
import App from "./App"
import Routing from "./Routing/Routing"
import * as serviceWorker from "./serviceWorker"

const Index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/routing">
          <Routing />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

ReactDOM.render(<Index />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
