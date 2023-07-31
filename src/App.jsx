import React, { Component } from 'react';
import AddTask from './componente/AddTask';
import Task from './componente/Task';

import './style.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  componentDidMount = () => {
    this.loadTasksFromLocalStorage();
  };

  loadTasksFromLocalStorage = () => {
    let localStageTasks = localStorage.getItem('tasks');

    if (localStageTasks) {
      localStageTasks = JSON.parse(localStageTasks);
      this.setState({
        tasks: localStageTasks,
      });
    }
  };
  creatTask = (newTask) => {
    const { tasks } = this.state;
    const updantedTasks = [...tasks, newTask];
    this.setState({
      tasks: updantedTasks,
    });

    localStorage.setItem('tasks', JSON.stringify(updantedTasks));
  };
  updateTask = (updatedTask) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.map((task) => {
      const taskToUpdade = task;

      if (taskToUpdade.id === updatedTask.id) {
        taskToUpdade.hasFinished = updatedTask.hasFinished;
      }
      return taskToUpdade;
    });
    this.setState({
      tasks: updatedTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  renoveTask = (id) => {
    const { tasks } = this.state;
    const updatedTasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks: updatedTasks,
    });
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  render() {
    const { tasks } = this.state;

    return (
      <>
        <AddTask onCreate={this.creatTask} />
        {tasks.map((task) => (
          <Task
            key={task.id}
            data={task}
            onUpdate={this.updateTask}
            onRemove={this.renoveTask}
            hasFinished={task.hasFinished}
          />
        ))}
      </>
    );
  }
}
export default App;
