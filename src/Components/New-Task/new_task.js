import React, { Component } from 'react';
import './new_task.css';


export default class NewTask extends Component{
    constructor(){
        super();

        this.state = {
            id : 0,
            title : '',
            description : '',
            completed:false
        }

        this.handleUpdateTitle = this.handleUpdateTitle.bind(this);
        this.handleUpdateDescription = this.handleUpdateDescription.bind(this);
        this.clearInput = this.clearInput.bind(this);
        this.submitAndClearInput = this.submitAndClearInput.bind(this);
    }

    handleUpdateTitle(event){
        this.setState({
            title: event.target.value
        })
        
    }

    handleUpdateDescription(event){
        this.setState({
            description : event.target.value
        })
    }

    clearInput(){
        this.setState({
            title: '',
            description: ''
        })
    }

    submitAndClearInput(state){
        this.props.clickHandler(state);
        this.clearInput();
    }

    render(){
        return(
            <div className='new-task'>
                <h4>Add New Task</h4>
                <input 
                placeholder="Title" type="text" className="title"
                value={this.state.title}
                onChange={this.handleUpdateTitle}
                />
                <input 
                placeholder="Description" type="text" className="description"
                value={this.state.description}
                onChange={this.handleUpdateDescription}
                />
                <div className="buttons-container">
                    <button className="btn-small-green" 
                    onClick={()=>{this.state.title 
                         ?
                         this.submitAndClearInput(this.state)
                         : 
                         alert("Please enter a title")}}
                    >Add Task</button>
                    <button className="btn-small-pink"
                    onClick={this.clearInput}
                    >Cancel</button>
                </div>
            </div>
        )
    }
}

