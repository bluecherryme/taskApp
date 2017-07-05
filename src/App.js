import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addTask, completeTask, deleteTask} from './reducer';
import NewTask from './Components/New-Task/new_task';
import ViewTask from './Components/View-Task/view_task';
import TaskList from './Components/Task-List/view-task-list';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {task:{}};
  
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleDeleteTask = this.handleDeleteTask.bind(this);
    this.handleCompleteTask = this.handleCompleteTask.bind(this);
    this.handleView = this.handleView.bind(this);
  }

  handleAddTask(task){
    this.props.addTask(task);
  }

  handleDeleteTask(task){
    this.props.deleteTask(task);
  }

  handleCompleteTask(task){
    this.props.completeTask(task);
  }

  handleView(task){
    this.setState({task:task});    
  }

  render() {
    return (
      <div className="App">
          <h1>Keep track of your tasks</h1>
        <div className="container">     {/*main container*/}
          <div className="left-side">
            <div className="new-task-container">
              <NewTask clickHandler={this.handleAddTask} />
            </div>
            <div className="view-task-container">
              <ViewTask
              task={this.state.task}
               completeTask={this.handleCompleteTask} deleteTask={this.handleDeleteTask}/>
            </div>
          </div>
          <div className="right-side">
            <div className="view-task-list">
              <TaskList currentTasks={this.props.currentTasks}
              completedTasks={this.props.completedTasks} 
              completeTask={this.handleCompleteTask} deleteTask={this.handleDeleteTask}
              handleView={this.handleView}
              />
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentTasks: state.tasks,
    completedTasks: state.completedTasks
  }
}

export default connect(mapStateToProps, {addTask, completeTask, deleteTask})(App);
