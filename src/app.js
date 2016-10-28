import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div>
          Hello World!!;
      </div>
    );
  }
}




// import React, { Component } from 'react'
// import { connect } from 'react-redux'
// import { addTodo } from './actions/actions'
//
// import ReactDOM from 'react-dom'
// import Contact from './components/Contact'
// import ContactDetails from './components/ContactDetails'
//
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'
//
// // import Counter from './components/Counter'
//
// class App extends Component {
//
//   render() {
//     const { dispatch, visibleTodos } = this.props
//
//     return(
//       <div>
//
//           <AddTodo
//             onAddClick = {text =>
//             dispatch(addTodo(text))}
//             />
//           <TodoList todos = {visibleTodos} />
//           <ContactDetails />
//           This is the React App
//           <Contact title={this.props.headerTitle} myname={this.props.firstName} />
//
//
//       </div>
//     );
//   }
// }
//
// function select(state) {
//   return (
//     visibleTodos: state.todos
//   )
// }
// export default connect(select)(App)
//
// ReactDOM.render(<App headerTitle="Ha Ha Ha" firstName="Dave" />, document.getElementById('app'))
