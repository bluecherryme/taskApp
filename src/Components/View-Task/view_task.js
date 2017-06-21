import React, { Component } from 'react';
import './view_task.css';


export default class ViewTask extends Component{
    constructor(){
        super();

        this.state = {
            title : '',
            description : ''
        }

        this.handleChangeViewTask = this.handleChangeViewTask.bind(this);
    }

    handleChangeViewTask(title,description){
        this.setState({
            title: title,
            description: description
        })
    }

    render(){
        return(
            <div className='new-task'>
                <h4>View Task</h4>
                <input placeholder="Title" type="text" className="title"
                 value={this.state.title}
                />
                <input placeholder="Description" type="text" className="description"
                 value={this.state.title}
                />
                <div className="buttons-container">
                    <button className="btn-small-green complete">Complete</button>
                    <button className="btn-small-pink delete">Delete</button>
                </div>
            </div>
        )
    }
}

