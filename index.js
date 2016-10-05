import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { Index, Content, NoMatch, Home } from "./components.js"
window.onload = init;

function init() {
  renderDOM();
}

function renderDOM() {
  var wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  render((
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="problem/:id" component={Content}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
  ), wrapper);
}
