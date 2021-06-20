import './TodoItems.css';
// import { useState } from 'react';
import cancel from './images/cancel.jpg';
import check from './images/check.jpg';

function TodoItems(props) {
    console.log(props);
    let checkID = 'c' + props.itemIndex;

    //呼叫上層刪除function
    const deleteSelected = (e) =>{
      props.deleteByID(e.target.id);
      // console.log(e.target.id);
    }

    const boxChecked = (e) =>{
      props.boxChecked(e.target.id);
    }

    return (
      <div className="todo_list">
          <ul>
              <li className="todo">  
                <input className="todo_check" id={checkID} type="checkbox" 
                defaultChecked={props.todoItems.checked} onChange={boxChecked}/>
                <label htmlFor={checkID}><img src={check} alt="check"/></label>
                <label>{props.todoItems.task}</label>
                <div className="btn-delete" onClick={deleteSelected} id={props.itemIndex}>
                    <img className="btn-delete-img" src={cancel} alt="cancel"/>
                </div>
              </li> 
          </ul>
      </div>  
    )
}

export default TodoItems;

