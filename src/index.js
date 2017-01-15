import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, Link } from 'react-router'
import './index.css'

let Index = function(){
  return (
    <div>
    <Link to="/Other">Other</Link>
    <p></p>
    <code>This is the Index</code>
    </div>
  )
}


let Other = function(){
  return (
    <div>
    <Link to="/">Index</Link>
    <p></p>
    <code>This is the Other</code>
    </div>
  )
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index} />
    <Route path="/Other" component={Other} />
  </Router>),
document.getElementById('root'))
