import React, { Component } from 'react';
import ListItem from './list-item';
import './view-task-list.css';

export default class ViewTaskList extends Component {
    render(){
        
        return(
            <div className='view-task-list'>
                <div className="buttons-container btn-right">
                    <button className="btn-small-green">View Current</button>
                    <button className="btn-small-pink">View All</button>
                </div>
                <div className="task-list">
                    <ul>
                        {ListItem(this.props.currentTasks,this.props.completeTask)}
                        {ListItem(this.props.completedTasks,this.props.deleteTask)}                        
                    </ul>
                </div>
            </div>
        );
    }
}