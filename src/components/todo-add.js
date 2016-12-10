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
         <div className="add-container">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div>
                <input className="form-control" type="text" ref="todoText" placeholder="What would you like to do?"/>
              </div>
               <button className="btn btn-primary">Add Todo</button>
            </form>
         </div>
      );
   }
};

export default TodoAdd;
