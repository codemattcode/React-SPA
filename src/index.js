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
    <p></p>
    <code>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti voluptate, et amet. Ab reprehenderit quas reiciendis et, voluptatem accusamus quibusdam repellat ipsam? Nostrum atque, provident suscipit animi porro ipsam at.</code>
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
