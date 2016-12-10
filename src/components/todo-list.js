import React, { Component } from 'react';
import TodoElement from './todo-element.js';

class TodoList extends Component {
   render() {
      var {todos} = this.props;
      var renderList = () => {
        if (todos.length === 0) {
          return (
            <p className="nothing-todo">Nothing To Do</p>
          )
        }

         return todos.map((todo) => {
            return (
               <TodoElement key={todo.id} {...todo} onToggle={this.props.onToggle}/>
            );
         });
      };
      return (
         <div className="todos-container">{renderList()}</div>
      );
   }
}

export default TodoList;
