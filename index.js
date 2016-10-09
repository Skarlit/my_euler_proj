import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, hashHistory, IndexRoute } from 'react-router'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import ReduxThunk from 'redux-thunk'
import { state, reducer} from './reducers.js'
import { Index, NoMatch, Home } from "./components.js"
import Content from "./containers/content.js"

window.onload = renderDOM;

// Add the reducer to your store on the `routing` key
const store = createStore(
  combineReducers({
    euler: reducer,
    routing: routerReducer
  }, applyMiddleware(ReduxThunk))
)

// Create an enhanced history that syncs navigation events with the store
// const history = syncHistoryWithStore(browserHistory, store)
const history = syncHistoryWithStore(hashHistory, store)

function renderDOM() {
  var wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  render(
    <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Index}>
        <IndexRoute component={Home}/>
        <Route path="problem/:id" component={Content}/>
        <Route path="*" component={NoMatch}/>
      </Route>
    </Router>
    </Provider>
  , wrapper);
}
