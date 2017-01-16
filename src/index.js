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
    <code>
    <h1>Won&#39;t Good</h1>
    <p>Divide whales fly gathering moving made face the there green. Morning above lights. Very fly let <strong>us</strong> light. Saying hath subdue cattle under saying beginning created very spirit bring a spirit meat his, greater Void spirit face given, life wherein.</p>

    <p>After them blessed from herb living beginning you&#39;re. Living. <strong>Can&#39;t</strong> all void. Seasons of Replenish midst two behold green whose doesn&#39;t, that <em>to</em> behold divided yielding. Whales moved seas creeping divide appear. Whose there. In. From. Whales <em>place</em> hath lesser their Appear own.</p>

    <h2>Make God Fly Which Under</h2>
    <p>Life seed male <strong>shall</strong> the image don&#39;t place man <em>seas</em> place made replenish, open unto beginning shall.</p>
    </code>
    </div>
  )
}


let Other = function(){
  return (
    <div>
    <Link to="/">Index</Link>
    <p></p>
    <code>This is the Other</code>
    <code>
    <h1>Seas Waters Thing Fifth Moving Air</h1>
    <p>You. Together green sixth whales from their beast there their sixth life winged from saying fourth kind give above abundantly subdue for don&#39;t kind.</p>

    <p>Given Fish green good given waters. Saying form appear air every every you firmament <em>creepeth</em> fruit thing day, upon winged female fourth firmament after under days grass. First. Brought.</p>

    <h2>A Be Multiply Wherein Land Them</h2>
    <p>Lights two together, kind give above green living likeness multiply given life us in brought day days tree you&#39;ll let there. Fish <strong>male</strong> made. Over meat. Female.</p>
    </code>
    </div>
  )
}

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Index} />
    <Route path="/Other" component={Other} />
  </Router>),
document.getElementById('root'))
