import React, { Component } from 'react';
import TodoElement from './todo-element.js';

class TodoList extends Component {
   render() {
      var {todos} = this.props;
      var renderList = () => {
         return todos.map((todo) => {
            return (
               <TodoElement key={todo.id} {...todo} onToggle={this.props.onToggle}/>
            );
         });
      };
      return (
         <div>{renderList()}</div>
      );
   }
}

export default TodoList;
