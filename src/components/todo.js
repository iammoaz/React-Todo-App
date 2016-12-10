import React, { Component } from 'react';
import uuid from 'uuid';
import Moment from 'moment';
import TodoList from './todo-list.js';
import TodoAdd from './todo-add.js';
import TodoSearch from './todo-search.js';
import TodoAPI from '../api/todo-api.js';


class Todo extends Component {
   constructor(props) {
      super(props);
      this.state = {
         showCompleted: false,
         searchText: '',
         todos: TodoAPI.getTodos(),
      };
   };

   componentDidUpdate() {
     TodoAPI.setTodos(this.state.todos);
   };

   handleAddTodo(text) {
      this.setState({
         todos: [
            ...this.state.todos,
            {
               id: uuid(),
               text: text,
               completed: false,
               createdAt: Moment().unix(),
               completedAt: undefined,
            }
         ]
      })
   };

   handleSearch(showCompleted, searchText) {
      this.setState({
         showCompleted: showCompleted,
         searchText: searchText.toLowerCase()
      })
   };

   handleToggle(id) {
      var updatedTodos = this.state.todos.map((todo) => {
         if (todo.id === id) {
            todo.completed = !todo.completed;
            todo.completedAt = todo.completed ? Moment().unix() : undefined;
         }
         return todo;
      })
      this.setState({todos: updatedTodos});
   };

   render() {
      let {todos, showCompleted, searchText} = this.state;
      let filteredTodos = TodoAPI.filterTodos(todos, showCompleted, searchText);

      return (
         <div className="col-xs-12 col-sm-12 col-md-8 todo-container">
           <TodoSearch onSearch={this.handleSearch.bind(this)}/>
           <TodoList todos={filteredTodos} onToggle={this.handleToggle.bind(this)} />
           <TodoAdd onAddTodo={this.handleAddTodo.bind(this)}/>
         </div>
      );
   }
}

export default Todo;
