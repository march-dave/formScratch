import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<App />, document.getElementById('app'));

// import React from 'react'
//
// import { render } from 'react-dom'
// import { createStore } from 'redux'
// import { Provider } from 'react-redux'
// import { Router, Route, Link, browerHistroy, IndexRoute } from 'react-rotuer'
//
// import App from './app'
// import todoApp from './reducres/reducres'
//
// let store = creatStore(todoApp)
// let rootElement = document.getElementById('app')
//
// render (
//
//   <div>
//       <ul>
//           <li>Home</Link>
//           <li>About</Link>
//           <li>Contact</Link>
//       </ul>
//       {this.props.children}
//   </div>
//
//   <Provider store = {store}>
//     <App />
//   <Provider>,
//
//     rootElement
// )
//
// ReactDOM.render({
//   <Router histroy={browserHistory}>
//     <Router path="/" component={App}>
//       <IndexRoute component={Home} />
//       <Route paht="home" component={Home} />
//       <Route path="abput" component={About} />
//       <Route path="contact" component={Contact} />
//     </Router>
//   </Router>
// })
