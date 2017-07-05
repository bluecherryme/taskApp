import React from 'react';
import './list-item.css';




export default function ListItem(list, functionDelOrCom, handleView){
        return list.map((task)=>{
            return( 
                <li key={task.id} 
                style={
                    (task.completed)
                    ?
                    {color:'grey',
                     'backgroundColor':"lightgrey",
                     'borderRadius':'20px 0 0 0',
                     'paddingLeft':'20px',
                     'borderTop': '1px solid white'}
                    :
                    {color:'#DC1A59',
                     'backgroundColor':"#78CAB9", 
                     'borderRadius':'20px 0 0 0',
                     'paddingLeft':'20px',
                     'borderTop': '1px solid white'
                    }
                }
                
                >
              
                <div className="list-title"><strong>{task.title}</strong></div>
                <div className="list-description">{task.description}</div>
                
                {(!task.completed)
                    ?
                    <div>
                        <button className="View" onClick={(e)=>handleView(task)}>View</button>                        
                        <button className="btn-tiny-green complete"
                        onClick={(event)=>{functionDelOrCom(task)}}>Complete</button>
                    </div>
                    :
                    <button className="btn-tiny-pink delete"
                        onClick={(event)=>{functionDelOrCom(task)}}
                    >Delete</button>
                }
                               
                </li>

            );
        })
    
}
