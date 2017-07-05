import React, { Component } from 'react';
import {connect} from 'react-redux';
import NewTask from './Components/New-Task/new_task';
import ViewTask from './Components/View-Task/view_task';
import TaskList from './Components/Task-List/view-task-list';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      currentTasks : [{title:'finish app', description:'get on with it', completed: false}],
      completedTasks : [{title:'first', description:'not enough', completed: true}]
    }
  
  this.addTask = this.addTask.bind(this);
  this.deleteTask = this.deleteTask.bind(this);
  this.completeTask = this.completeTask.bind(this);
  }

  addTask(task){
    let taskListCopy = this.state.currentTasks;
    taskListCopy.push(task);
    this.setState({
      currentTasks : taskListCopy
    })
  }

  deleteTask(title){
    let index = this.state.completedTasks.findIndex(task=>{
      return task.title === title;
    });

    let copyCompletedTasks = this.state.completedTasks;
    copyCompletedTasks.splice(index,1);
    this.setState({
      completedTasks : copyCompletedTasks
    })
  }

  completeTask(title){
    let index = this.state.currentTasks.findIndex(task=>{
      return task.title === title;
    });

    let copyCurrentTasks = this.state.currentTasks;
    let copyCompletedTasks = this.state.completedTasks;
    copyCompletedTasks.unshift(copyCurrentTasks.splice(index,1)[0]);
    this.setState({
      currentTasks: copyCurrentTasks,
      completedTasks : copyCompletedTasks    
    })
  }

  render() {
    return (
      <div className="App">
          <h1>Keep track of your tasks</h1>
        <div className="container">     {/*main container*/}
          <div className="left-side">
            <div className="new-task-container">
              <NewTask clickHandler={this.addTask} />
            </div>
            <div className="view-task-container">
              
            </div>
          </div>
          <div className="right-side">
            <div className="view-task-list">
              <TaskList currentTasks={this.state.currentTasks}
              completedTasks={this.state.completedTasks} 
              deleteTask={this.deleteTask}
              completeTask={this.completeTask}
              />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default connect()(App);
