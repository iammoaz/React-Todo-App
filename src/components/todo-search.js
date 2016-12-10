import React, { Component } from 'react';

class TodoSearch extends Component {
   handleSearch() {
      let showCompleted = this.refs.showCompleted.checked;
      let searchText = this.refs.searchText.value;
      this.props.onSearch(showCompleted, searchText);
   };
   render() {
      return (
        <div className="search-container">
          <div className="search-row">
            <input type="search" ref="searchText" className="form-control" placeholder="Search for..." onChange={this.handleSearch.bind(this)}/>
          </div>
          <div className="completed-row">
            <div className="form-check">
              <label className="form-check-label">
                <input className="form-check-input" type="checkbox" ref="showCompleted" onChange={this.handleSearch.bind(this)} />Show completed todos</label>
            </div>
          </div>
        </div>
      );
   }
};

export default TodoSearch;
