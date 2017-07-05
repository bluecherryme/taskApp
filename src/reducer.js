const ADD_TASK = 'ADD_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';
const REMOVE_TASK = 'REMOVE_TASK';

var initialState = {
    tasks: ['test'],
    completedTasks: ['done']
};

export default function taskReducer(state=initialState,action){
    var newTasks = state.tasks.slice();
    var newCompl = state.completedTasks? state.completedTasks.slice():[];
    switch(action.type){
        case ADD_TASK:
            var newT = [...state.tasks, action.payload];
            return{tasks:newT, completedTasks:state.completedTasks};
        case COMPLETE_TASK:
            var index = state.tasks.findIndex((e)=>e===action.payload);
            newTasks.splice(index,1);
            newCompl.unshift(action.payload);
            return {tasks:newTasks, completedTasks: newCompl}
        case REMOVE_TASK:
            var ind = state.completedTasks.findIndex(e=>e===action.payload);
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