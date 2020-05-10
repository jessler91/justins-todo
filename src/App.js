import React, {Component} from 'react';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import {v4 as uuid} from "uuid"; ;

class App extends Component {

  state = {
    todos: [
      {
        id: uuid,
        title: "take out the trash",
        completed: false,
      },
      {
        id: uuid,
        title: "dinner with wife",
        completed: false,
      },
      {
        id: uuid,
        title: "meeting with boss",
        completed: false,
      }
    ]
  }


  // Toggle Complete
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }



  //Delete Todo
  delTodo = (id) => {
    this.setState({ 
      todos: [...this.state.todos
        .filter(todo => todo.id !== id)
      ]})
  }

  // Add ToDo
  addTodo = (title) => {
    const newTodo = {
      id:uuid,
      title,
      completed:false,
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }


  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
        </div>
      </div>
    );
  }

}

export default App;
