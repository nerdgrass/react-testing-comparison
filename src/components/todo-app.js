import React from 'react';

import TodoStore from '../stores/todo-store'

// Retrieve the current TODO data from the TodoStore
function getTodoState() {
  return {
    allTodos: TodoStore.getAll(),
    areAllComplete: TodoStore.areAllComplete()
  };
}

// Component
export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: getTodoState()};
  }
  componentDidMount() {
    //TodoStore.addChangeListener(this._onChange);
  }
  componentWillUnmount() {
    //TodoStore.removeChangeListener(this._onChange);
  }
  // Event handler for 'change' events coming from the TodoStore
  onChange() {
    this.setState(getTodoState());
  }
  render() {
    return (
      <h1>It Works!</h1>
    );
  }
}
