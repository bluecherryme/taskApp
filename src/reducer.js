const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';
const UPDATE_TASK = 'UPDATE_TASK';
var id = 3;
    
var initialState = {
    tasks: [{id: 1, title:'finish app', description:'get on with it', completed: false}],
    completedTasks: [{id: 2, title:'first', description:'not enough', completed: true}]
};

export default function taskReducer(state=initialState,action){
    var newTasks = state.tasks.slice();
    var newCompl = state.completedTasks ? state.completedTasks.slice() : [];
    switch(action.type){
        case ADD_TASK:
            var newTask = action.payload;
            newTask.id = id;
            id++;
            var newT = [...state.tasks, newTask];
            return{tasks:newT, completedTasks:state.completedTasks};
        case COMPLETE_TASK:
            var index = state.tasks.findIndex((e)=>e.id===action.payload.id);
            var completedTask = newTasks.splice(index,1)[0];
            completedTask.completed = true;
            newCompl.unshift(completedTask);
            return {tasks:newTasks, completedTasks: newCompl}
        case UPDATE_TASK:
            var inx = state.tasks.findIndex((e)=>e.id===action.payload.id);
            newTasks.splice(inx, 1, action.payload);
            return {tasks:newTasks, completedTasks: newCompl}
        case REMOVE_TASK:
            var ind = state.completedTasks.findIndex(e=>e.id===action.payload.id);
            newCompl.splice(ind,1);
            return {tasks: state.tasks, completedTasks:newCompl};
        default:
            return state;
    }
}

export function addTask(newTask){
    return{
        type:ADD_TASK,
        payload:newTask
    }
}

export function completeTask(task){
    return{
        type:COMPLETE_TASK,
        payload:task
    }
}

export function deleteTask(task){
    return{
        type:REMOVE_TASK,
        payload: task
    }
}

export function updateTask(task){
    return{
        type: UPDATE_TASK,
        payload: task
    }
}