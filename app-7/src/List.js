import React, {Component} from 'react';
import ToDo from './ToDo'

export default function List(props){
    let list = this.props.tasks.map((e, i)=>{
        return <ToDo key={i} tasks={e} />
    })
    return(
        <div>{list}</div>
    )
}