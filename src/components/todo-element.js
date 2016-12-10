import React, { Component } from 'react';
import moment from 'moment';

class TodoElement extends Component {
   render() {
      let {id, text, completed, createdAt, completedAt} = this.props;
      let elementClassName = completed ? 'todo-element todo-completed' : 'todo-element';

      let renderDate = () => {
        let message = 'Created at ';
        let timeStamp = createdAt;

        if (completed) {
          message = 'Completed at ';
          timeStamp = completedAt;
        }

        return message + moment.unix(timeStamp).format('MMM Do YYYY @h:mm a');
      };

      return (
         <div className={elementClassName} onClick={() => { this.props.onToggle(id); }}>
           <div>
             <input type="checkbox" checked={completed}/>
           </div>
           <div>
             <p className="todo-text">{text}</p>
             <p className="todo-subtext">{renderDate()}</p>
           </div>
         </div>
      );
   }
}

export default TodoElement;
