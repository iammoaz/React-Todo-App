import React, { Component } from 'react';

class TodoAdd extends Component {
   handleSubmit(e) {
      e.preventDefault();
      let todoText = this.refs.todoText.value;
      if (todoText.length > 0) {
         this.refs.todoText.value = '';
         this.props.onAddTodo(todoText);
      } else {
         this.refs.todoText.focus();
      }
   };
   render() {
      return (
         <div className="row">
            <form onSubmit={this.handleSubmit.bind(this)}>
               <input type="text" ref="todoText" placeholder="What would you like to do?"/>
               <button className="button">Add Todo</button>
            </form>
         </div>
      );
   }
};

export default TodoAdd;
