import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from './actions/actions'

import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

class App extends Component {
    render() {
        const {dispatch, visibleTodos} = this.props

        return(
            <div>
                <AddTodo
                    onAddClick = { text => 
                        dispatch(addTodo(text))}
                />

                <TodoList tods = {VisibleTods} />
            </div>
        )
    }
}

function select(state) {
    return (
        visibleTodos: state.todos
    )
}

export default connect(select)(App)


// import React from 'react';
// import Todos from './components/Todos'

// class App extends React.Component {

//   constructor() {
//     super();

//     this.state = {
//       name: ''
//     }

//     this.updataState = this.updataState.bind(this);
//   }

//   updataState() {
//     this.setState( {
//       name: 'this is event'
//     })
//   }

//   render() {
//     return (
//       <div>

//         <Todos firstname={this.state.name} updateProps={this.updataState}/>

//       </div>
//     );
//   }
// }

// export default App;
