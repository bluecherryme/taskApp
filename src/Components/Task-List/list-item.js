import React from 'react';
import './list-item.css';




export default function ListItem(list, functionDelOrCom, indicator){
        
        return list.map((task,index)=>{

            return( 
                <li key={index} 
                style={
                    (indicator===false)
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
                {(indicator===true)
                    ?
                    <button className="btn-tiny-green complete"
                        onClick={(event)=>{functionDelOrCom(list[index].title)}}
                    >Complete</button>
                    :
                    <button className="btn-tiny-pink delete"
                        onClick={(event)=>{functionDelOrCom(list[index].title)}}
                    >Delete</button>}
                
               
                </li>

            );
        })
    
}
