import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateTask} from './../../reducer';
import './view_task.css';


class ViewTask extends Component{
    constructor(props){
        super(props);

        this.state = {
            id : 0,
            title : '',
            description: '',
            completed: '',
        }

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }

    clearInput(){
        this.setState({
            id : 0,
            title : '',
            description: '',
            completed: '',
        })
    }

    handleTitleChange(title){
        this.setState({
            title: title,
        })
    }

    handleDescriptionChange(description){
        this.setState({
            description: description,
        })
    }

    componentWillReceiveProps(props){
        this.setState(
            {
                id:props.task.id,
                title:props.task.title,
                description:props.task.description,
                completed:props.task.completed
            });
    }

    handleUpdate(task){
        if(task.id!==0){
            this.props.updateTask(task);
        }
        this.clearInput();
    }

    render(){
        return(
            <div className='new-task'>
                <h4>View Task</h4>
                <input placeholder="Title" className="title"
                 value={this.state.title}
                 onChange={(e)=>this.handleTitleChange(e.target.value)}
                />
                <input placeholder="Description" className="description"
                 value={this.state.description}
                 onChange={(e)=>this.handleDescriptionChange(e.target.value)}
                />
                <div className="buttons-container three-btn">
                    <button className="btn-small-green save"
                        onClick={e=>this.handleUpdate(this.state)}
                        >Save
                    </button>
                    <button className="btn-small-green complete">Complete</button>
                    <button className="btn-small-pink delete"
                        onClick={this.clearInput}
                        >Cancel
                    </button>                    
                    <button className="btn-small-pink delete">Delete</button>
                </div>
            </div>
        )
    }
}

export default connect(null,{updateTask})(ViewTask);

