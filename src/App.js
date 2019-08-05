import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
import TodoForm from './components/TodoComponents/TodoForm';
import './components/TodoComponents/Todo.css'


const tasks = [
  {
    task: 'Make Bed',
    id: 1,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskData: tasks
    }
  }

  toggleItem = id => {
    this.setState({
      taskData: this.state.taskData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    })
  }

  addTask = taskName => {
    const newTask = {
      task: taskName,
      id: Date.now(),
      completed: false
    }
    this.setState({
      taskData: [...this.state.taskData, newTask]
    })
  }

  clearCompleted = () => {
    this.setState({
      taskData: this.state.taskData.filter(item => !item.completed)
    });
  };

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <>
      <div className='header'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
      </div>
      <TodoList taskData={this.state.taskData} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
    </>
    );
  }
}

export default App;
