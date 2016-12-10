import React, { Component } from 'react';
import moment from 'moment';

class TodoElement extends Component {
   render() {
      let {id, text, completed, createdAt, completedAt} = this.props;

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
         <div onClick={() => { this.props.onToggle(id); }}>
            <input type="checkbox" checked={completed}/>
            <p>{text}</p>
            <p>{renderDate()}</p>
         </div>
      );
   }
}

export default TodoElement;
